/* eslint-disable consistent-return */
//* propsTypes
import P from 'prop-types';
//* hooks
import { useEffect, useState } from 'react';
//* styles
import * as Styled from './style';

function Message({ type, msg }) {
  const [Visible, setVisible] = useState(true);
  useEffect(() => {
    if (!msg) {
      setVisible(false)
      return
    }

    setVisible(true)

    const timer = setTimeout(() => {
      setVisible(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [msg])


  return (
    <div>
      {Visible && (
        <div>
          {type === 'error' && <Styled.MessageError>{msg}</Styled.MessageError>}
          {type === 'success' && (
            <Styled.MessageSuccess>{msg}</Styled.MessageSuccess>
          )}
        </div>
      )}
    </div>
  );
}

Message.propTypes = {
  type: P.node.isRequired,
  msg: P.string.isRequired,
};

export default Message;
