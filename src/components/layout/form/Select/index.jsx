import P from 'prop-types';
import * as Styled from './styles';

function Select({ text, name, options, hamdleOnChange, value }) {
  return (
    <Styled.FormControl>
      <label htmlFor={name}>{text}</label>

      <select
        name={name}
        id={name}
        onChange={hamdleOnChange}
        value={value || ''}
      
      >
        <option>Selecione uma opção</option>
        {options.map((option) => (
          <option value={option.id} key={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </Styled.FormControl>
  );
}

Select.propTypes = {
  text: P.string.isRequired,
  name: P.string.isRequired,
  hamdleOnChange: P.func.isRequired,
  value: P.node.isRequired,
  options: P.node.isRequired,
};

export default Select;
