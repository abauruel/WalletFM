import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div``;
export const ContainerList = styled.div`
  > div {
    display: flex;
    justify-content: space-between;

    svg {
      margin: 0 10px;
    }
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;

  padding: 20px;
  margin: 10px;

  border-radius: 4px;
  /* box-shadow: 9px 8px 17px -8px rgba(0, 0, 0, 0.75);
  transition: background-color 0.2s; */
  a {
    color: '#551b8b';
    :hover {
      color: #5cb85c;
    }
  }

  :hover {
    background: ${shade(0.2, '#551b8b')};
    color: #fff;
    a {
      color: #fff;
    }
  }
`;
