import React from 'react';
import PropTypes from 'prop-types';
import s from './Profile.module.css';

const Profile = ({ name, tag, location, avatar, stats }) => (
  <div className={s.profile}>
    <div className="description">
      <img src={avatar} alt="Аватар пользователя" className={s.avatar} />
      <p className={s.name}>{name}</p>
      <p className={s.tag}>@{tag}</p>
      <p className={s.location}>{location}</p>
    </div>

    <ul className={s.stats}>
      <li className={s.list}>
        <span className="label">Followers: </span>
        <span className={s.quantity}>{stats.followers}</span>
      </li>
      <li className={s.list}>
        <span className="label">Views: </span>
        <span className={s.quantity}>{stats.views}</span>
      </li>
      <li className={s.list}>
        <span className="label">Likes: </span>
        <span className={s.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propsTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.string.isRequired,
};

export default Profile;
