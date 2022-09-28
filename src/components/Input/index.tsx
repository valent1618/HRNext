type Types =
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'month'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week';

interface InputProps {
  name: string;
  label?: string;
  type: Types;
  required?: boolean;
  pattern?: string;
  errorMessage?: string;
  minLength?: number;
  maxLength?: number;
  min?: number | string;
  max?: number | string;
}

/**
 * Custom input that shows you if it is valid or not
 */
function Input({
  name,
  label = name,
  type,
  required = true,
  pattern,
  errorMessage,
  minLength,
  maxLength,
  min,
  max,
}: InputProps) {
  const typesString = ['email', 'password', 'search', 'tel', 'text', 'url'];

  return (
    <div className={`input-container ${name}`} data-testid='container'>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        pattern={pattern}
        minLength={typesString.includes(type) ? minLength : undefined}
        maxLength={typesString.includes(type) ? maxLength : undefined}
        min={!typesString.includes(type) ? min : undefined}
        max={!typesString.includes(type) ? max : undefined}
        data-testid='input'
        onInvalid={
          errorMessage
            ? (e) => e.currentTarget.setCustomValidity(errorMessage)
            : undefined
        }
        onInput={
          errorMessage
            ? (e) => e.currentTarget.setCustomValidity('')
            : undefined
        }
      />
      <label htmlFor={name} data-testid='label'>
        {label}
      </label>
    </div>
  );
}

export default Input;
