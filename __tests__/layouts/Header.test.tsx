import { screen } from '@testing-library/react';
import render from '../../setupTests';
import Header from '../../src/layouts/Header';

const setup = () => render(<Header />);

describe('Header', () => {
  setup();
  const img = screen.getByRole('img');
  const title = screen.getByRole('banner');

  it('Should have HRNet logo', () => {
    expect(img).toBeInTheDocument();
  });
  it('Should display HRNet', () => {
    expect(title).toHaveTextContent('HRNext');
  });
});
