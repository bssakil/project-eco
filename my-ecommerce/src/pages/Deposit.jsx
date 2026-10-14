import { useState } from "react";

function Deposit() {

  const [amount, setAmount] = useState("");

  const handleDeposit = () => {

    if (!amount || amount <= 0) {
      alert("Enter a valid amount.");
      return;
    }

    const user = JSON.parse(
      localStorage.getItem("user")
    );

    user.balance =
      Number(user.balance) + Number(amount);

    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    setAmount("");

    alert("Deposit successful!");
  };

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  return (

    <div className="money-page">

      <h1>Deposit</h1>

      <h2>
        Balance: ${user?.balance || 0}
      </h2>

      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={handleDeposit}>
        Deposit
      </button>

    </div>
  );
}

export default Deposit;