import P from 'prop-types';
import * as Styled from './styles'

function Container({ children, minHeight }) {
  return <Styled.Container minHeight={minHeight}>{children}</Styled.Container>;
}
Container.propTypes = {
  children: P.element.isRequired,
  minHeight: P.string.isRequired
};
export default Container;
