import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  margin: 0 auto;
  width: 450px;
  h1 {
    display: flex;
    justify-content: center;
    padding: 10px;
    color: #551b8b;
  }
  form {
    margin: 20px 10px;
    select {
      appearance: none;
      border: none;
      margin-left: 10px;
      font-size: 18px;
      background: #fff;
      width: 70%;
    }
    div {
      border-radius: 4px;
      padding: 20px;
      margin: 10px 0;
      background: #fff;
      span {
        color: #551b8b;
        font-size: 18px;
      }
      input {
        border: none;
        margin-left: 10px;
        width: 70%;
        font-size: 18px;
      }
    }
    button {
      width: 100%;
      border-radius: 4px;
      padding: 20px;
      margin: 10px 0;
      border: none;
      color: #fff;
      background: #5cb85c;
      border-radius: 4px;
      font-size: 18px;
      font-weight: bold;
      transition: background-color 0.3s;
      :hover {
        background: ${shade(0.2, '#5cb85c')};
      }
    }
  }
`;
export const ContainerSelect = styled.div``;
