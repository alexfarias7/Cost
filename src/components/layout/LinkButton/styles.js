import { Link } from "react-router-dom";
import styled from "styled-components";

export const Btn= styled(Link)`
background:  #222;
color: #fff;
padding:0.5em 1em;
text-decoration: none;
transition:0.5s;
margin: 1em;

&:hover{
  color: #ffbb33;
}
`
