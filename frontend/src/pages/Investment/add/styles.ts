import styled, { css } from 'styled-components';
import { shade } from 'polished';
import ArrowDown from '../../../assets/arrowDown3.png';

interface ButtonProp {
  cancel?: boolean;
}
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
      min-width: 40%;
      background: url(${ArrowDown}) no-repeat right;
      background-size: 20px;
      color: #551b8b;
      cursor: pointer;
      svg {
        color: #551b8b;
      }
    }
    div {
      border-radius: 4px;
      padding: 20px;
      margin: 10px 0;
      background: #fff;
      span {
        color: #551b8b;
        font-size: 18px;
        font-weight: bold;
      }
      input {
        border: none;

        margin-left: 10px;
        width: 70%;
        font-size: 18px;
        ::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      }
    }
  }
`;
export const Button = styled.button<ButtonProp>`
  ${props =>
    props.cancel
      ? css`
          background: #d9534f;
          :hover {
            background: ${shade(0.2, '#d9534f')};
          }
        `
      : css`
          background: #5cb85c;
          :hover {
            background: ${shade(0.2, '#5cb85c')};
          }
        `}
  margin: 10px 0;
  width: 100%;
  border-radius: 4px;
  padding: 20px;
  border: none;
  color: #fff;
  border-radius: 4px;
  font-size: 18px;
  font-weight: bold;
  transition: background-color 0.3s;
`;
