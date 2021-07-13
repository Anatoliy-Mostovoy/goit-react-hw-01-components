import React from 'react';
import PropTypes from 'prop-types';
import { StatsItem } from './StatsItem';
import s from './Statistics.module.css';

export const Statistics = ({ title, stats }) => (
  <section className={s.statistics}>
    {title && <h2 className={s.title}>{title}</h2>}
    <ul className={s.stat}>
      {stats.map(({ id, label, percentage }) => (
        <StatsItem key={id} label={label} percentage={percentage} />
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  ),
};
