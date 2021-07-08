import React from "react";
import PropTypes from "prop-types";

const StatsItem = ({ label, percentage }) => (
  <li className="item">
    <span className="label: ">{label}</span>
    <span className="percentage: ">{percentage}%</span>
  </li>
);

StatsItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default StatsItem;
