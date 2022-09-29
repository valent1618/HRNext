import { screen } from '@testing-library/react';
import render from '../../setupTests';
import Footer from '../../src/layouts/Footer';

describe('Footer', () => {
  it('Should have "Copyright" into the text', () => {
    render(<Footer />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toHaveTextContent('Copyright');
  });
});
