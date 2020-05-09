import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
body{
  height: 100vh;
  background: #E5E5E5;



  -webkit-font-smoothing: antialiased;
}

body, input, button{
  font: 16px "Roboto", sans-serif;
}

button{
  cursor: pointer;
}
`;
