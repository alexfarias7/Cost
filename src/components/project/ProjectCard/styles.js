import styled from "styled-components";

export const ProjectCard = styled.div`
padding: 1em;
border: 1px solid #7a7a7a;
border-radius: 5px;
width: 24%;
margin: 0.5%;

& h4{
  background-color: #222;
  color: #ffbb33;
  padding: 0.4em;
  margin-bottom: 1.3em;
  font-size: 1.3em;
}

& p{
  color:#7a7a7a;
  margin-bottom: 1em;
}

& p span{
  font-weight: bold;
}
`
export const CategoryText = styled.div`
display: flex;
align-items: center;

& span{
  display: block;
  width:12px;
  height: 12px;
  border-radius: 50%;

  margin-right: 5px;
}
`
export const SpanInfra = styled.span`
background-color: #ffaebc;
display: flex;
`
export const SpanDesenvolvimento = styled.span`
background-color: #a0e7e5;
`
export const SpanDesing = styled.span`
background-color: #b4f8c8;
`
export const SpanPlanejamento = styled.span`
background-color: #fbe7c6;
`
export const ProjectCardAction = styled.div`
margin-top: 1.2em;
display: flex;
align-items: center;

& a, & button{
  text-decoration: none;
  border:none;
  background-color: #fff;
  color: #222;
  font-size: 0.9em;
  padding: 0.6em 1em;
  margin-right: 1em;
  cursor: pointer;
  border: 1px solid #222;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
}

& svg{
  margin-right: 0.5em;
}
& a:hover, & button:hover{
  background-color:#222;
  color: #ffbb33;
}

`
