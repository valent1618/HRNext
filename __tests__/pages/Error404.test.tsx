import { screen } from '@testing-library/react';
import render from '../../setupTests';
import Custom404 from '../../src/pages/404';

const setup = () => render(<Custom404 />);

describe('Error404 page', () => {
  setup();
  const main = screen.getByRole('main');
  const link = screen.getByRole('link');

  it('Should contain Error 404 and Page Not Found', () => {
    expect(main).toHaveTextContent('Error 404');
    expect(main).toHaveTextContent('Page Not Found');
  });
  it('Should have a link to create page', () => {
    expect(link).toHaveAttribute('href', '/');
  });
});
