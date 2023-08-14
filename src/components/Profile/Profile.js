import propTypes from 'prop-types';
import { Photo, Title, Email, Location } from './profile.syles';
const Profile = ({ link, city, email, name }) => {
  return (
    <div className="description">
      <Photo src={link} alt={name} />
      <Title>{name}</Title>
      <Email>@{email}</Email>
      <Location>{city}</Location>
    </div>
  );
};
Profile.propTypes = {
  link: propTypes.string.isRequired,
  city: propTypes.string.isRequired,
  email: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
};
export default Profile;
