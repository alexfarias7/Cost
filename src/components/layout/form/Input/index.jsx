import P from 'prop-types';
import * as Styled from './styles';

function Input({ type, text, name, placeholder, handleChange, value }) {
  return (
    <Styled.FormControl>
      <label htmlFor={name}>{text}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
        
      />
    </Styled.FormControl>
  );
}

Input.propTypes = {
  type: P.oneOfType([P.string, P.number]).isRequired,
  text: P.string.isRequired,
  name: P.string.isRequired,
  placeholder:P.string.isRequired,
  handleChange:P.func.isRequired,
  value: P.node.isRequired
};

export default Input;
