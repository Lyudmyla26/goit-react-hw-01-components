import { BsFillCircleFill } from 'react-icons/bs';
import propTypes from 'prop-types';
import { Item, Avatar, Name, Icon, List } from './FriendList.style';
const FriendList = ({ friend }) => {
  return (
    <div>
      <List>
        {friend.map(({ id, avatar, name, isOnline }) => (
          <Item key={id}>
            <Icon ofen={isOnline}>
              <BsFillCircleFill />
            </Icon>
            <Avatar src={avatar} alt={name} />
            <Name>{name}</Name>
          </Item>
        ))}
      </List>
    </div>
  );
};

FriendList.propTypes = {
  friend: propTypes.arrayOf(
    propTypes.shape({
      avatar: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      id: propTypes.number.isRequired,
    })
  ),
};
export default FriendList;
