import '@testing-library/jest-dom';
import { screen, fireEvent } from '@testing-library/react';
import render from '../../setupTests';
import Input from '.';

const setup = () =>
  render(
    <Input
      name='test'
      label='testInput'
      type='text'
      minLength={5}
      errorMessage='Error message test'
    />
  );

const setupNumber = () =>
  render(
    <Input
      name='testNumber'
      label='testInputNumber'
      type='number'
      min={-5}
      max={10}
    />
  );

describe('Input text component', () => {
  setup();
  const input = screen.getByTestId('input');
  const container = screen.getByTestId('container');
  const label = screen.getByTestId('label');

  it('Should be of type text', () => {
    expect(input).toHaveAttribute('type', 'text');
  });
  it('Should have "test" in container classList and input id and name', () => {
    expect(container.classList).toContain('test');
    expect(input).toHaveAttribute('id', 'test');
    expect(input).toHaveAttribute('name', 'test');
  });
  it('Should have "testInput" for label', () => {
    expect(label).toHaveTextContent('testInput');
  });
  it('Should be required', () => {
    expect(input).toBeRequired();
  });
  it('Should be invalid when value is empty', () => {
    expect(input.value).toBe('');
    expect(input).toBeInvalid();
  });
  it('Should not have attribute min or max when the type is text', () => {
    expect(input).not.toHaveAttribute('min');
    expect(input).not.toHaveAttribute('max');
  });
});

describe('Input text component event', () => {
  it('Should be valid when length value equal or superior than 5', () => {
    setup();
    const input = screen.getByTestId('input');
    fireEvent.change(input, { target: { value: 'abcde' } });
    expect(input.value).toBe('abcde');
    expect(input).toBeValid();
  });
  it('Should set custom validity message on invalid and nothing on input', () => {
    setup();
    const input = screen.getByTestId('input');
    fireEvent.invalid(input);
    expect(input.validationMessage).toBe('Error message test');
    fireEvent.input(input);
    fireEvent.change(input, { target: { value: 'a' } });
    expect(input.validationMessage).toBe('');
  });
});

describe('Input number component', () => {
  it('Should be of type number', () => {
    setupNumber();
    const input = screen.getByTestId('input');
    expect(input).toHaveAttribute('type', 'number');
  });
  it('Should not have attribute minLength or maxLength when the type is number', () => {
    setupNumber();
    const input = screen.getByTestId('input');
    expect(input).not.toHaveAttribute('minLength');
    expect(input).not.toHaveAttribute('maxLength');
  });
  it('Should be valid when value is between -5 and 10', () => {
    setupNumber();
    const input = screen.getByTestId('input');
    fireEvent.change(input, { target: { value: '2' } });
    expect(input.value).toBe('2');
    expect(input).toBeValid();
  });
  it('Should be invalid when value is out of range -5 and 10', () => {
    setupNumber();
    const input = screen.getByTestId('input');
    fireEvent.change(input, { target: { value: '-6' } });
    expect(input.value).toBe('-6');
    expect(input).toBeInvalid();
    fireEvent.change(input, { target: { value: '11' } });
    expect(input.value).toBe('11');
    expect(input).toBeInvalid();
  });
});
