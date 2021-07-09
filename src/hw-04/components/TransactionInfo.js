import React from 'react';
import PropTypes from 'prop-types';
import s from './Transaction.module.css';

const TransactionInfo = ({ type, amount, currency }) => (
  <>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </>
);

TransactionInfo.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionInfo;
