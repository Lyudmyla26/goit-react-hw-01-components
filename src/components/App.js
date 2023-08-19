import Profile from './Profile/Profile.js';
import Statistics from './Statistics/Statistics.js';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import FriendList from './FriendList/FriendList.js';
import transaction from '../data/transactions.json';
import TransactionHistory from './Transaction/TransactionHistory.js';
import { Container, Page } from './App.styles.js';
import { GlobalStyle } from './Global.styled.js';
export const App = () => {
  return (
    <Page>
      <Container className="profil">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Container>

      <Statistics stats={data} title="Upload stats" />
      <FriendList friend={friends} />
      <TransactionHistory arry={transaction} />
      <GlobalStyle />
    </Page>
  );
};
