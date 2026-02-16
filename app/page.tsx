'use client';
import { useState } from "react";

 function Page() {

  const [bill, setBill] = useState("");
  const [tip, setTip] = useState(0);
  const [total, setTotal] = useState(0);

  const calculate = () => {
    let b = Number(bill);
    let tip = b * 0.05;
    let total  = b + tip;

    setTip(tip);
    setTotal(total);
  };

  const reset = () => {
    setBill("");
    setTip(0);
    setTotal(0);
  };

  return (
  <div className="w-[755] h-[755] bg-blue-200 flex justify-center items-center text-black">

  <div className="bg-blue-300 p-6 rounded-3xl w-[900px]">

    <div className="bg-white text-center p-3 rounded-xl font-bold text-xl mb-6">My Tip Calculator</div>

    <div className="flex">
        <div className="bg-gray-100 w-1/2 p-6 rounded-l-3xl flex flex-col gap-4">
        <label className="font-semibold">Bill Amount</label>
        <input
          type="number"
          value={bill}
          onChange={(e) => setBill(e.target.value)} className="p-3 rounded-lg border bg-gray-200 text-black" />

  <button onClick={calculate}className="mt-6 p-3 border-2 border-blue-500 rounded-xl font-bold">Calculate</button>
          </div>
  <div className="bg-purple-300 w-1/2 p-6 rounded-r-3xl flex flex-col justify-between">

  <div className="flex flex-col gap-4">
  <div className="bg-white p-4 rounded-xl flex justify-between font-semibold">
    <span>Tip / person</span>
    <span>{tip.toFixed(2)} ฿</span>
  </div>
  <div className="bg-white p-4 rounded-xl flex justify-between font-semibold">
    <span>Total / person</span>
      <span>{total.toFixed(2)} ฿</span>
        </div>
</div>

  <button
  onClick={reset}className="bg-white p-3 rounded-xl font-bold mt-10">Reset</button>
  </div>
  </div>
  </div>

    </div>
  );
}
export default Page;