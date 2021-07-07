import React from "react";
import Profile from "./hw-01/components/Profile";
import user from "./hw-01/data/user.json";

const App = () => (
  <div>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  </div>
);

export default App;
