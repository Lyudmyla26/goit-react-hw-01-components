import { BsFillCircleFill } from 'react-icons/bs';
import { Item, Avatar, Name, Icon } from './FriendList.style';
const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <Item>
      <Icon $ofen={isOnline}>
        <BsFillCircleFill />
      </Icon>
      <Avatar src={avatar} alt={name} />
      <Name>{name}</Name>
    </Item>
  );
};
export default FriendListItem;
