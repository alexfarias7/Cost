import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`



*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: ${({theme})=>theme.fonts.default};
}
htmL{
  font-size: 62.5%;
}
   body, #root{

    ${({theme})=>css`
      background-color: ${theme.colors.mainBg};
      `}
      height: 100% ;
    font-size: 1.6rem;
  }
 
`
