import Profile from './Profile.js';
import Stats from './stats.js';
import user from './user.json';

export const App = () => {
  return (
    <div>
      <div className="profil">
        <Profile
          name={user.username}
          email={user.tag}
          city={user.location}
          link={user.avatar}
        />
        <Stats
          likes={user.stats.likes}
          views={user.stats.views}
          followers={user.stats.followers}
        />
      </div>
    </div>
  );
};
