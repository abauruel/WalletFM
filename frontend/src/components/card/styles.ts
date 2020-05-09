import styled, { css } from 'styled-components';

interface GridProps {
  grid?: number;
}

export const Container = styled.div<GridProps>`
  height: 240px;
  width: 470px;
  background: #fff;

  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 0 10px;
  border-radius: 4px;
  border: none;

  :hover {
    border-bottom: 10px solid #551b8b;
  }
  span {
    font-size: 24px;
    color: #551b8b;
  }
  > div {
    ${props =>
      props.grid
        ? css`
            display: grid;
            grid-template-columns: 1fr 1fr;
            height: 100%;
          `
        : css`
            display: grid;
            grid-template-columns: 1fr;
            height: 100%;
          `}

    text-align: center;

    align-items: center;
    justify-content: center;

    margin: 15px 30px;
    > span {
      font-size: 72px;
    }
  }
`;
