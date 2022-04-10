import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin:auto;
  flex-wrap: wrap;

  ${({minHeight})=> css`
  height: ${minHeight};
  `}



  .start{
    justify-content: flex-start;
  }

  .column{
    flex-direction: column;
    justify-content: flex-start;
  }
`
