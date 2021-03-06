import React from 'react';
import PropTypes from 'prop-types';
import s from './Friends.module.css';

export const FriendsItem = ({ avatar, name, isOnline }) => (
  <li className={s.item}>
    <span
      className={s.status}
      style={
        isOnline === true
          ? { backgroundColor: 'green' }
          : { backgroundColor: 'red' }
      }
    ></span>
    <img className="avatar" src={avatar} alt={name} width="50" height="50" />
    <p className={s.name}>{name}</p>
  </li>
);

FriendsItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
