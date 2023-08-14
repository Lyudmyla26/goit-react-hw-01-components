import styled from 'styled-components';
export const Item = styled.li`
  width: 400px;
  background-color: #f5f5f5;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  column-gap: 40px;
  margin-top: 20px;
  padding: 10px;
`;
export const Avatar = styled.img`
  width: 70px;
`;
export const Name = styled.p`
  font-size: 30px;
  font-weight: 600;
`;
export const Icon = styled.span`
  display: flex;
  align-items: center;
  margin-left: 10px;
  color: ${props => {
    switch (props.$ofen) {
      case 'true':
        return 'green';
      case 'false':
        return 'red';
      default:
        return 'yellow';
    }
  }};
`;
export const List = styled.ul`
  padding: 0;
`;
