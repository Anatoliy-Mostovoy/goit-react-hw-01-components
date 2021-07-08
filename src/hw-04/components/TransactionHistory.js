import React from "react";
import PropTypes from "prop-types";
import TransactionInfo from "./TransactionInfo";

const TransactionHistory = ({ items }) => (
  <table className="transaction-history">
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionInfo
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tr>
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
