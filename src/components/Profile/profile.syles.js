import styled from 'styled-components';

export const Photo = styled.img`
  width: 200px;
  border-radius: 50%;
  height: 200px;
`;
export const Title = styled.p`
  font-size: 30px;
  font-weight: 700;
  margin: 10px;
`;
export const Email = styled.p`
  color: #666;
  font-size: 24px;
  margin-bottom: 10px;
`;
export const Location = styled.p`
font-size: 20px;
    font-weight: 600
    color: black`;

export const Likes = styled.ul`
  align-items: center;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  padding: 5px;
  border: 2px solid blue;
  border-radius: 15px;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 15px 20px;
`;
export const Quantity = styled.span`
  color: black;
  font-size: 20px;
  font-weight: 600;
`;
export const Label = styled.span`
  font-size: 20px;
`;
