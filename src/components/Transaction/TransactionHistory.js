import propTypes from 'prop-types';
import { Table, Hero, String, Type } from './Transaction.style';
const TransactionHistory = ({ arry }) => {
  return (
    <div>
      <Table>
        <thead>
          <Hero>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </Hero>
        </thead>

        <tbody>
          {arry.map(({ id, type, amount, currency }) => (
            <String key={id}>
              <Type>{type}</Type>
              <Type>{amount}</Type>
              <Type>{currency}</Type>
            </String>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
TransactionHistory.propTypes = {
  arry: propTypes.arrayOf(
    propTypes.shape({
      type: propTypes.string.isRequired,
      currency: propTypes.string.isRequired,
      amount: propTypes.string.isRequired,
      id: propTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
export default TransactionHistory;
