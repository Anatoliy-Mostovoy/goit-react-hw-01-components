import React from "react";
import Profile from "./hw-01/components/Profile";
import user from "./hw-01/data/user.json";
import Statistics from "./hw-02/components/Statistics";
import statisticalData from "./hw-02/data/statistical-data.json";
import FriendList from "./hw-03/components/FriendList";
import friends from "./hw-03/data/friends.json";

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
  </div>
);

export default App;
