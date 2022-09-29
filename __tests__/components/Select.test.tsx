import { screen } from '@testing-library/react';
import render from '../../setupTests';
import Select from '../../src/components/Select';

const setup = (label?: string) => {
  render(
    <Select
      name='test'
      label={label}
      options={['Option test 1', 'Option test 2', 'Option test 3']}
    />
  );
};

describe('Select component', () => {
  it('Should have "Test :" for label and "test" for select id and name', () => {
    setup();
    const label = screen.getByText('Test :');
    const select = screen.getByTestId('select');
    expect(label).toHaveTextContent('Test :');
    expect(select).toHaveAttribute('id', 'test');
    expect(select).toHaveAttribute('name', 'test');
  });
  it('Should have a different label with an uppercase first letter', () => {
    setup('other label');
    const label = screen.getByText('Other Label :');
    expect(label).toHaveTextContent('Other Label :');
  });
  it('Should have all the options', () => {
    setup();
    const option1 = screen.getByText('Option test 1');
    const option2 = screen.getByText('Option test 2');
    const option3 = screen.getByText('Option test 3');
    expect(option1).toHaveTextContent('Option test 1');
    expect(option2).toHaveTextContent('Option test 2');
    expect(option3).toHaveTextContent('Option test 3');
  });
});
