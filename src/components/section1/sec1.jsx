import React, { useEffect, useState } from "react"
import { supabase } from "../../supabaseClient"

function Sec1() {
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    fetchTransactions()
  }, [])

  const fetchTransactions = async () => {
    const { data, error } = await supabase
      .from("transactions")
      .select("*")

    if (error) {
      console.log("Error fetching:", error)
    } else {
      console.log("Transactions:", data)
      setTransactions(data)
    }
  }

  return (
    <div>
      <h1>Dashboard</h1>

      {transactions.length === 0 ? (
        <p>No transactions found</p>
      ) : (
        transactions.map((item) => (
          <div key={item.id}>
            {item.cc_num} || ₹{item.amt}
          </div>
        ))
      )}
    </div>
  )
}

export default Sec1