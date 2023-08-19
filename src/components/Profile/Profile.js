import propTypes from 'prop-types';
import { Likes, Item, Quantity, Label } from './profile.syles.js';
import { Photo, Title, Email, Location } from './profile.syles';
const Profile = ({ avatar, location, tag, username, stats }) => {
  return (
    <div className="description">
      <Photo src={avatar} alt={username} />
      <Title>{username}</Title>
      <Email>@{tag}</Email>
      <Location>{location}</Location>
      <Likes>
        <Item>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </Item>
        <Item>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </Item>
        <Item>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </Item>
      </Likes>
    </div>
  );
};
Profile.propTypes = {
  avatar: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  username: propTypes.string.isRequired,
  stats: propTypes.objectOf(propTypes.number),
};
export default Profile;
