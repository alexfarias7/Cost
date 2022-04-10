import styled from "styled-components";

export const Footer = styled.footer`
background-color: #222;
color: white;
padding: 2em;
margin-top:5em;
text-align: center;
`
export const SocialList = styled.li`
display: flex;
justify-content: center;
list-style-type: none;

& li{
  margin: 0 1em;
}
& li:hover {
  color: #ffbb33;
}

& svg{
  font-size: 1.5em;
  cursor: pointer;
}
`

export const Paragrafo = styled.p`
margin-top: 2em;

& span {
  font-weight: bold;
  color: #ffbb33;
}
`
