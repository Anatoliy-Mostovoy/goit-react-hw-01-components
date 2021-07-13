import React from 'react';
import PropTypes from 'prop-types';

export const TransactionInfo = ({ type, amount, currency }) => (
  <tr>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </tr>
);

TransactionInfo.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
