import React from "react";

const StatsItem = ({ id, label, percentage }) => (
  <>
    <li className="item" key={id}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  </>
);

export default StatsItem;
