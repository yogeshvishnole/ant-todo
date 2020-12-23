import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
 } 

 img{
    max-width:100%
 }
`;

export const Container = styled.div`
	margin: auto;
	max-width: 1100px;
`;

export default GlobalStyle;
