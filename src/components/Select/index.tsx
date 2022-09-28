import capitalizeFirstLetter from '../../utils/capitalizeFirstLetter';

interface SelectProps {
  name: string;
  label?: string;
  options: string[];
}

/**
 * Custom select, label is by default same as name with an uppercase first letter
 */
function Select({ name, label = name, options }: SelectProps) {
  return (
    <div className='select'>
      <label htmlFor={name}>{capitalizeFirstLetter(label)} :</label>
      <select id={name} name={name} data-testid='select'>
        {options.map((option) => (
          <option key={name + option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

export default Select;
