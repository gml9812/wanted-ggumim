import { someUtilFunc1 } from 'util';

ExchangeResultBox.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export function ExchangeResultBox({ from, to, amount }) {
  const timestamp = getExchangeRate('timestamp');

  return (
    <ResultBox>
      <h1>
        {`${to} `}
        {calculateExchangedAmount({ from, to, amount })}
      </h1>
      <div>{`기준일: ${timestampToDate(timestamp)}`}</div>
    </ResultBox>
  );
}
