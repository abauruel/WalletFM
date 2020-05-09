import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 450px;

  > div {
    padding: 20px 0;
    background: #fff;
    margin: 10px;
    border-radius: 4px;
    > span {
      color: #551b8b;
      font-size: 18px;
      margin: 20px;

      background: #fff;
    }
  }
`;
export const ContainerTitle = styled.div`
  margin: 0 auto;
  width: 450px;
  padding: 10px 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  h1 {
    margin-top: 10px;
    padding: 10px;
    display: flex;
    margin-left: 10px;
    justify-content: center;
    color: #551b8b;
  }
  a {
    margin-top: 10px;
    padding: 10px;
    margin-right: 10px;
    background: #5cb85c;
    width: 150px;
    border-radius: 4px;
    text-align: center;
    text-decoration: none;
    color: #fff;
    font-weight: bold;
  }
`;
