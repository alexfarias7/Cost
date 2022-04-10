import styled from "styled-components";

export const Navbar = styled.nav`
display:flex;
justify-content: space-between;
background-color: #222;
padding: 1em;

`

export const List = styled.ul`
display: flex;
list-style: none;
align-items: center;
`

export const Item = styled.li`
 margin-right:1em;

 & a{
   color: #fff;
   text-decoration: none;
 }

 & a:hover{
   color: #ffbb33;
 }


`
