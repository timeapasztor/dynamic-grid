import styled from 'styled-components';

export const GridWrapper = styled.div`
    justify-content: center;
    display: grid;
    grid-template-columns: 20px 20px 20px;
    grid-template-rows: 20px 20px 20px;
    gap: 12px;
`;

export const Placeholder = styled.div`
  width: 0;
  height: 0;
`;

export const Square = styled.div<{ i: number, j: number }>`
  width: 20px;
  height: 20px;
  background: red;
  grid-row-start: ${(props) => props.i};
  grid-row-end: ${(props) => props.i};
  grid-column-start: ${(props) => props.j};
  grid-column-end: ${(props) => props.j};
`;

export const VRectangle = styled.div<{ i: number, j: number }>`
  width: 20px;
  height: 52px;
  background: red;
  grid-row-start: ${(props) => props.i - 1};
  grid-row-end: ${(props) => props.i + 1};
  grid-column-start: ${(props) => props.j};
  grid-column-end: ${(props) => props.j};
`;

export const HRectangle = styled.div<{ i: number, j: number }>`
  width: 52px;
  height: 20px;
  background: red;
  grid-row-start: ${(props) => props.i};
  grid-row-end: ${(props) => props.i};
  grid-column-start: ${(props) => props.j - 1};
  grid-column-end: ${(props) => props.j + 1};
`;