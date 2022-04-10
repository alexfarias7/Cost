import P from 'prop-types';

import * as Styled from './styles';

function LinkButon({ to, text }) {
  return (
    <Styled.Btn to={to}>{text}</Styled.Btn>
  );
}

LinkButon.propTypes = {
  to: P.node.isRequired,
  text: P.string.isRequired,
};
export default LinkButon;
