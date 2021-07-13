import React from 'react';
import { Profile } from './Profile/Profile';
import user from '../Data/user.json';
import { Statistics } from './Statistics/Statistics';
import statisticalData from '../Data/statistical-data';
import { FriendList } from './FriendList/FriendList';
import friends from '../Data/friends';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transaction from '../Data/transactions';

const App = () => (
  <div>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload Stats" stats={statisticalData} />
    <FriendList friends={friends} />
    <TransactionHistory items={transaction} />
  </div>
);

export default App;
