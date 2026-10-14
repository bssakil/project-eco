import { useState } from "react";

function Withdraw() {
  const [amount, setAmount] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));

  const handleWithdraw = () => {
    if (!amount || Number(amount) <= 0) {
      alert("Enter a valid amount.");
      return;
    }

    if (!user) {
      alert("Please login first.");
      return;
    }

    if (Number(amount) > Number(user.balance)) {
      alert("Insufficient balance.");
      return;
    }

    user.balance =
      Number(user.balance) - Number(amount);

    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    setAmount("");

    alert("Withdraw successful!");
  };

  return (
    <div className="money-page">

      <h1>Withdraw</h1>

      <h2>
        Balance: ${user?.balance || 0}
      </h2>

      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={handleWithdraw}>
        Withdraw
      </button>

    </div>
  );
}

export default Withdraw;