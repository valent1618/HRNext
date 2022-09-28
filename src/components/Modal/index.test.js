import '@testing-library/jest-dom';
import { fireEvent, screen } from '@testing-library/react';
import render from '../../setupTests';
import Modal from '.';
import { closeModal } from '../../utils/handleModal';

// Mock handleModal because jest don't support 'close()' function
jest.mock('../../utils/handleModal');

const mockFn1 = jest.fn(() => 1);
const mockFn2 = jest.fn(() => 2);

const setup = () =>
  render(
    <Modal
      text='Modal text test'
      links={[{ path: 'test', text: 'Link test' }]}
      buttons={[
        { action: mockFn1, text: 'Yes' },
        { action: mockFn2, text: 'No' },
      ]}
    />
  );

describe('Modal component', () => {
  setup();
  const dialog = screen.getByTestId('dialog');
  const h3 = screen.getByText('Modal text test');
  const link = screen.getByText('Link test');

  it('Should be hide without action', () => {
    expect(dialog).not.toHaveAttribute('open');
  });
  it('Should display props text', () => {
    expect(h3).toHaveTextContent('Modal text test');
  });
  it('Should display the link', () => {
    expect(link).toHaveTextContent('Link test');
    expect(link).toHaveAttribute('href', '/test');
  });
});

describe('Modal component event', () => {
  it('Should close modal when close button is clicked', () => {
    setup();
    const dialog = screen.getByTestId('dialog');

    // Open the modal manually
    dialog.setAttribute('open', '');
    expect(dialog).toHaveAttribute('open');

    const closeButton = screen.getByTestId('close-button');
    // Change closeModal() by removeAttribute
    closeModal.mockImplementation(() =>
      // eslint-disable-next-line testing-library/no-node-access
      document.getElementsByTagName('dialog')[0].removeAttribute('open')
    );
    fireEvent.click(closeButton);
    expect(dialog).not.toHaveAttribute('open');
  });
  it('Should display buttons and the actions should work', () => {
    setup();
    const yesButton = screen.getByText('Yes');
    fireEvent.click(yesButton);
    expect(mockFn1).toHaveBeenCalled();

    const noButton = screen.getByText('No');
    fireEvent.click(noButton);
    expect(mockFn2).toHaveBeenCalled();
  });
});
