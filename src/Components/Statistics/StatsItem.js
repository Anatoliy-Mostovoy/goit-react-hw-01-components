import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export const StatsItem = ({ label, percentage }) => (
  <li className={s.item}>
    <span className={s.label}>{label}</span>
    <span className="percentage">{percentage}%</span>
  </li>
);

StatsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
