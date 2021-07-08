import React from "react";
import PropTypes from "prop-types";
import FriendsItem from "./FriendsItem";

const FriendList = ({ friends }) => (
  <ul className="friend-list">
    {friends.map(({ avatar, name, isOnline, id }) => (
      <FriendsItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
