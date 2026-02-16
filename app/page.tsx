"use client"
import { type ChangeEventHandler, useState } from "react"

interface BillFormProps {
  addBill: (bill: number) => void
}

const BillForm = ({ addBill }: BillFormProps) => {
  const [bill, setBill] = useState("")

  const handleChanged: ChangeEventHandler<HTMLInputElement> = (event) => {
    setBill(event.target.value)
  }

  const handleAddBill = () => {
    addBill(Number(bill))
    setBill("")
  }

  return (
    <div className="bg-blue-300 p-6 rounded-3xl text-black w-[300px]">
      <h1>Bill Form</h1>
      <input type="number" value={bill} onChange={handleChanged} />
      <button onClick={handleAddBill}>Add Bill</button>
    </div>
  )
}

interface ResultProps {
  bill: number
  tip: number
  total: number
}

const Result = ({ bill, tip, total }: ResultProps) => {
  return (
    <div className="bg-blue-300 p-6 rounded-3xl text-black m-3 w-[300px]">
      <ul>
      <li>Bill: {bill}</li>
      <li>Tip (5%): {tip}</li>
      <li>Total: {total}</li>
    </ul>
    </div>
  )
}

const IndexPage = () => {
  const [bill, setBill] = useState(0)
  const [tip, setTip] = useState(0)
  const [total, setTotal] = useState(0)

  const addBill = (billAmount: number) => {
    const tipAmount = billAmount * 0.05
    const totalAmount = billAmount + tipAmount

    setBill(billAmount)
    setTip(tipAmount)
    setTotal(totalAmount)
  }

  return (
    <>
      <BillForm addBill={addBill} />
      <Result bill={bill} tip={tip} total={total} />
    </>
  )
}

export default IndexPage
