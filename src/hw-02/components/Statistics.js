import React from "react";
import PropTypes from "prop-types";
import StatsItem from "./StatsItem";

const Statistics = ({ title, stats }) => (
  <section className="statistics">
    {title && <h2 className="title">{title}</h2>}
    <ul className="stat-list">
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
    })
  ),
};

export default Statistics;
