import { Likes, Item, Quantity, Label } from './profile.syles.js';
import PropTypes from 'prop-types';
const Stats = ({ likes, views, followers }) => {
  return (
    <Likes>
      <Item>
        <Label>Followers</Label>
        <Quantity>{followers}</Quantity>
      </Item>
      <Item>
        <Label>Views</Label>
        <Quantity>{views}</Quantity>
      </Item>
      <Item>
        <Label>Likes</Label>
        <Quantity>{likes}</Quantity>
      </Item>
    </Likes>
  );
};

Stats.propTypes = {
  likes: PropTypes.number,
  views: PropTypes.number,
  followers: PropTypes.number,
};
export default Stats;
