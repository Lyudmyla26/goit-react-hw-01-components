import styled from 'styled-components';
export const Section = styled.section`
  border: 2px solid #666;
  border-radius: 15px;
  width: 400px;
  padding: 5px;
`;
export const Title = styled.h2`
  text-align: center;
  color: purple;
  font-size: 30px;
`;
export const StatsList = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 0;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: ${props => {
    switch (props.$item) {
      case 22:
        return 'green';
      case 17:
        return 'purple';
      case 4:
        return 'yellow';
      case 47:
        return 'blue';
      case 10:
        return 'red';
      default:
        return 'yellow';
    }
  }};
  padding: 10px;
  align-items: center;
  width: 80px;
  border-radius: 20px;
`;
