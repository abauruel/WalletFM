import styled from 'styled-components';

export const Container = styled.header`
  height: 10vh;
  background: #fff;
  color: #3c3c3c;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    margin: 0 20px;
    text-decoration: none;

    :hover {
      border-bottom: 3px solid #3c3c3c;
    }
  }
`;
