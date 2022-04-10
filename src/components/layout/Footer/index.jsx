import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import * as Styled from './styles';

function Footer() {
  return (
    <Styled.Footer>
      <Styled.SocialList>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaTwitter />
        </li>
      </Styled.SocialList>
      <Styled.Paragrafo>
        &copy; <span>Cost 2022 </span>
      </Styled.Paragrafo>
    </Styled.Footer>
  );
}

export default Footer;
