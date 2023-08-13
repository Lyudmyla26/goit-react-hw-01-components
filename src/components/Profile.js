const Profile = ({ link, city, email, name }) => {
  return (
    <div className="description">
      <img src={link} alt={name} className="avatar" />
      <p className="name">{name}</p>
      <p className="tag">@{email}</p>
      <p className="location">{city}</p>
    </div>
  );
};
export default Profile;
