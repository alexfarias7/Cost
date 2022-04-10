import { Link } from 'react-router-dom';

import * as Styled from './style';
import logo from '../../../img/costs_logo.png';
import Container from '../Container/Container';

function Navbar() {
  return (
    <Styled.Navbar>
      <Container minHeight="">
        <>
          <Link to="/">
            {' '}
            <img src={logo} alt="Cost" />
          </Link>
          <Styled.List>
            <Styled.Item>
              <Link to="/project"> Projetos</Link>
            </Styled.Item>

            <Styled.Item>
              <Link to="/company"> Empresa</Link>
            </Styled.Item>

            <Styled.Item>
              <Link to="/contato"> Contato</Link>
            </Styled.Item>
            <Styled.Item>
              <Link to="/newProject"> Novo Projeto</Link>
            </Styled.Item>
            <Styled.Item>
              <Link to="/about"> Sobre</Link>
            </Styled.Item>
          </Styled.List>
        </>
      </Container>
    </Styled.Navbar>
  );
}

export default Navbar;
