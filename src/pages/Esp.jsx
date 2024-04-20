import React from 'react'
import {io} from "socket.io-client";
const Esp = () => {
    const socket = io('http://localhost:5000');
    socket.on("data",({data})=>{

    })
    const handlePower=async(e)=>{
        e.preventDefault();
        await fetch()
    }
  return (
    <div>Esp</div>
  )
}

export default Esp