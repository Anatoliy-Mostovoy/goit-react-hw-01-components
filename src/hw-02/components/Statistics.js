import React from "react";
import StatsItem from "./StatsItem";

const Statistics = ({ title, stats }) => (
  <section className="statistics">
    <h2 className="title">{title.length === 0 ? "" : "Upload stats"}</h2>
    <ul className="stat-list">
      {stats.map((item) => (
        <StatsItem
          key={item.id}
          label={item.label}
          percentage={item.percentage}
        />
      ))}
    </ul>
  </section>
);

export default Statistics;
