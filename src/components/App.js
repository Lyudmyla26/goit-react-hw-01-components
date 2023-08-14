import Profile from './Profile/Profile.js';
import Statistics from './Statistics/Statistics.js';
import Stats from './Profile/stats.js';
import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import FriendList from './FriendList/FriendList.js';
import transaction from './transactions.json';
import TransactionHistory from './Transaction/TransactionHistory.js';
import { Container, Page } from './App.styles.js';
import { GlobalStyle } from './Global.styled.js';
export const App = () => {
  return (
    <Page>
      <Container className="profil">
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
      </Container>

      <Statistics items={data} />
      <FriendList friend={friends} />
      <TransactionHistory arry={transaction} />
      <GlobalStyle />
    </Page>
  );
};
