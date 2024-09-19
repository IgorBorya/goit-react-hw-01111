import React from "react";
import Profile from "./Components/Profile/Profile";
import userData from "./userData.json";
import FriendList from "./Components/FriendList/FriendList";
import friends from "./friends.json";
import transactions from "./transactions.json";
import TransactionHistory from "./Components/TransactionHistory/TransactionHistory";

const App = () => {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
