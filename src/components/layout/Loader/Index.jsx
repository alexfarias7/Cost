import loading from '../../../img/loading.svg';

import * as Styled from './styles'

function Loader() {
  return (
    <Styled.StyleLoader>
      <Styled.Loader src={loading} alt="Loading" />
    </Styled.StyleLoader>
  );
}

export default Loader;
