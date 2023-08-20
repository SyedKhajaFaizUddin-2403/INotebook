import React from 'react'
import { useLocation } from 'react-router-dom'

function Test() {
    const location = useLocation();
    const data=location.state
  return (
    <div>Testfd vesdsd e sdsg wa a f wsf wf  wesfasf   wsfsdf  wsd   sdf   wesfdfscsdc  {data.title} </div>
  )
}

export default Test