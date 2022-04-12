import P from 'prop-types';
import * as Styled from './styles';

function Select({ text, name, options, handleChange, value }) {
  return (
    <Styled.FormControl>
      <label htmlFor={name}>{text}</label>

      <select value={value} name={name} onChange={handleChange} options={options}>
        <option value="vallue">Selecione uma opção</option>
      </select>
    </Styled.FormControl>
  );
}

Select.propTypes = {
  text: P.string.isRequired,
  name: P.string.isRequired,
  handleChange: P.func.isRequired,
  value: P.node.isRequired,
  options: P.node.isRequired,
};

export default Select;
