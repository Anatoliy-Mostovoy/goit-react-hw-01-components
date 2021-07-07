import React from "react";
import Profile from "./hw-01/components/Profile";
import user from "./hw-01/data/user.json";
import Statistics from "./hw-02/components/Statistics";
import statisticalData from "./hw-02/data/statistical-data.json";

const App = () => (
  <div>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={statisticalData} />
  </div>
);

export default App;
