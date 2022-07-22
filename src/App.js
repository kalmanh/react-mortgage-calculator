import logo from './logo.svg';
import './App.css';
import { getMortgagePayoff } from 'mortgage';
import PrincipalInterestChart from './PrincipalInterestChart';
import AmortizationTable from './AmortizationTable';

const totalBalance = 100000;
const rate = 6;
const years = 30;

function App() {
  // 1. Monthly payment
  // 2. Total interest
  // 3. Graph of principal vs. interest
  // 4. The amortization table

  const {
    data,
    defaultTotalInterest,
    mountlyPayment: monthlyPayment,
  } = getMortgagePayoff(totalBalance, rate / 100, years * 12);
  // console.log({ it });

  return (
    <div className="App">
      <div className="line-item">Total Balance: {totalBalance}</div>
      <div className="line-item">Rate: {rate}</div>
      <div className="line-item">Length: {years}</div>
      <div className="line-item">Monthly Payment: {monthlyPayment}</div>
      <div className="line-item">Total Interest: {defaultTotalInterest}</div>

      <div className="line-item">
        <PrincipalInterestChart chartData={data} />
      </div>
      <div className="line-item">
        <AmortizationTable data={data} />
      </div>
    </div>
  );
}

export default App;
