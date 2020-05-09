import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 450px;
  > div {
    padding: 10px;
    margin: 20px;
    i {
      margin: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fff;
      height: 125px;
      width: 125px;
      border-radius: 50%;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      color: black;
      font-size: 28px;
      font-weight: 600;
      text-align: center;
      margin: 10px;
    }
    > span {
      color: rgb(158, 158, 158);
      font-size: 24px;
      font-weight: 400;
      word-break: break-all;
      margin: 2px;
    }
    > button {
      justify-content: space-between;
      border: none;
      padding: 10px;
      margin: 10px;
      border-radius: 4px;
      background: #551b8b;
      color: #fff;
      > div {
        display: flex;
        justify-content: stretch;
        align-items: center;
      }
      span {
        margin: 0 5px;
      }
      svg {
        margin: 0 5px;
      }
    }
  }
`;

export const ContainerInvestment = styled.div`
  display: flex;
  background: #fff;
  justify-content: center;
  border-radius: 4px;
  padding: 10px;
  margin: 5px 0;
  width: 100%;
  > span {
    color: #551b8b;
    font-size: 18px;
    margin: 0 5px;
  }
`;
