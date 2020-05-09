import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 450px;
  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px;
    padding: 10px 0px;
    margin: 10px 0;
    h1 {
      color: #551b8b;
    }
    a {
      text-decoration: none;
      padding: 10px;
      background: #5cb85c;
      border-radius: 4px;
      font-weight: bold;
      color: #fff;
    }
  }
  > :nth-child(2) {
    justify-content: end;
    align-items: center;
    background: #fff;

    color: #551b8b;
    input {
      border: none;
      background: transparent;
      width: 100%;
    }
  }
  > div + div + div {
    background: #fff;
    padding: 20px;
    span {
      padding: 0 20px;
      width: 100%;
      font-size: 18px;
      color: #551b8b;
    }
  }
  svg {
    margin: 0 10px;
  }
`;
export const ContainerFilter = styled.div``;
