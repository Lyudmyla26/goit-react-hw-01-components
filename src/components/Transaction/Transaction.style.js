import styled from 'styled-components';
export const Table = styled.table`
  width: 400px;
`;
export const Hero = styled.tr`
  background-color: #efd4ed;
  border-collapse: collapse;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1);
  padding-botton: 20px;
`;
export const String = styled.tr`
  border-collapse: collapse;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1);
  &:nth-child(2n) {
    background-color: grey;
  }
`;
export const Type = styled.td`
  text-align: center;
`;
