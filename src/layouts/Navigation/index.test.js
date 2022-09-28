import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import render from '../../setupTests';
import Navigation from '.';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

const setup = (path) => {
  useRouter.mockImplementationOnce(() => ({
    pathname: path,
  }));
  render(<Navigation />);
};

describe('Navigation', () => {
  it('Should hide when location is random', () => {
    setup('/abc');
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('hide');
  });
  it('Should display right link when location is create', () => {
    setup('/');
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('right');
  });
  it('Should display left link when location is list', () => {
    setup('/list');
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('left');
  });
});
