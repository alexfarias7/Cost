import styled from "styled-components";

export const DivProject= styled.div`


flex-direction: column;
justify-content: flex-start;
margin-left: 5em;
margin-top:2em;


& button {

  margin-top: 1em;
  margin-bottom: 1em;
  width: 10em;
}
`
export const H1P = styled.h1`
height: 1.5em;
border-radius: 0.3em;
text-align: center;

`

export const ProjectDetails = styled.div`
padding: 2em;
width:500px;


& h1,h2,p{

  margin-bottom: 0.5em;
}

& h1{
  background-color: #222;
  color: #ffbb33;
}

& span {
  font-weight: bold;
}
`

export const ServiceFormContainer = styled.div`
border-bottom:1px solid #7a7a7a;
margin-bottom: 1.2em;
padding-bottom: 1.2em;
display: flex;
justify-content: space-between;
flex-wrap: wrap;

`
export const BtnProject = styled.button`
background-color: #222;
color: #fff;
padding: 0.5em 1em;
text-decoration: none;
transition: 0.5s;
cursor: pointer;
max-height: 40px;

&:hover{
  color: #ffbb33;

}
`

export const FormP = styled.form`
width: 100%;
`
