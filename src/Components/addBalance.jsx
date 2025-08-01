import { useContext, useState } from "react";
import "./AddBalance.css";
import { TransactionContext } from "../context/reactContext.jsx";

const AddBalance = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const { addTransaction } = useContext(TransactionContext);
  const handleIncomeSubmit = (text, amount) => {
    addTransaction(text, amount);
    setText("");
    setAmount("");
  };
  const handleExpenseSubmit = (text, amount) => {
    amount = -amount;
    addTransaction(text, amount);
    setText("");
    setAmount("");
  };

  return (
    <div className="add-balance-container">
      <h3>Add New Transaction</h3>
      <form>
        <div className="form-control">
          <label>Description</label>
          <input
            type="text"
            value={text}
            placeholder="Enter description..."
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>
            Amount <br />
          </label>
          <input
            type="number"
            value={amount}
            placeholder="Enter amount..."
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="submitButton">
          <button
            className="add-btn"
            onClick={(e) => {
              e.preventDefault();
              handleIncomeSubmit(text, amount);
            }}
          >
            Income
          </button>
          <button
            className="add-btn-expense"
            onClick={(e) => {
              e.preventDefault();
              handleExpenseSubmit(text, amount);
            }}
          >
            Expense
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBalance;
