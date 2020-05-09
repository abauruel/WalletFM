import styled from 'styled-components';

export const Container = styled.div``;

export const ContainerBody = styled.div`
  flex: 1;
  width: 900px;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  > :first-child {
    display: flex;
    flex-direction: row;
    margin: 10px;
  }
  h2 {
    color: #551b8b;

    border-bottom: 2px solid #551b8b;
  }
`;
export const ContainerSearch = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 4px solid #551b8b;
  margin: 0 20px;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    align-items: center;
    background: #fff;
    padding: 5px;

    border-radius: 4px;
    span {
      color: #551b8b;
      text-transform: uppercase;
    }
    input {
      border: none;
      margin-left: 10px;
    }
  }
`;
