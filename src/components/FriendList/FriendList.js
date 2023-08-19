import propTypes from 'prop-types';
import FriendListItem from './FrendListItem';
import { List } from './FriendList.style';
const FriendList = ({ friend }) => {
  return (
    <div>
      <List>
        {friend.map(({ id, avatar, name, isOnline }) => (
          <FriendListItem
            key={id}
            name={name}
            avatar={avatar}
            isOnline={isOnline}
          />
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
  ).isRequired,
};
export default FriendList;
