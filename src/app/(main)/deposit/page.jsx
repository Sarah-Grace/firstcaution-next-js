"use client"
import DepositDetail from "../../customComponents/depositDetail"
import DepositAdjust from "../../customComponents/DepositAdjust"
import { useState } from "react"

function Deposit() {
  const [depositDetail, setDepositDetail] = useState(true)
  const [depositAdjust, setDepositAdjust] = useState(null)
  // ///////////////////
  // have to update state from child components
  // ////////////////////
  return (
    <>
        { depositDetail && <DepositDetail /> }
        { depositAdjust && <DepositAdjust /> }   
    </>
  )
}

export default Deposit