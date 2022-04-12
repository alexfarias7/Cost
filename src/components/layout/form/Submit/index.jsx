import P from 'prop-types'
import * as Styled from './styles'

function ButtonSubmit({ text }) {
  return <Styled.BtnForm type="submit"> {text} </Styled.BtnForm>;
}
ButtonSubmit.propTypes ={
  text: P.string.isRequired
}
export default ButtonSubmit;
