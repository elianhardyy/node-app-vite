import React, { useEffect, useState } from 'react'
import { ref, onValue, update } from "firebase/database";
import { database } from '../utils/firebaseConfig';

const Waste = () => {
  const [datas, setDatas] = useState([]);
  const [on, setOn] = useState(false);
  const [off, setOff] = useState(false);
  //const [isEdit, setIsEdit] = useState(false);
  //const [distance1, setDistance1] = useState("");
  useEffect(()=>{
    const useRef = ref(database,'testing');
    onValue(useRef,(snapshot)=>{
      setDatas([]);
      const dataRtdb = snapshot.val();
      if(dataRtdb !== null){
        // const cr = Object.values(dataRtdb);
        // const lo = Object.values(dataRtdb).map((todo)=>({
        //   todo
        // }))
        //console.log(typeof dataRtdb);
        const po = Object.entries(dataRtdb).map(([d,value])=>({
          d,
          value
        }))
        console.log(po);
        setDatas(po);
      }
    })
    
  },[]);
  // const handleUpdate = (data) => { // gausah
  //   setDistance1(data.value)
  // }
  const handleSubmitChangeON = () => {
    update(ref(database,`buzzer1`),{
      value:true
    })
  }
  const handleSubmitChangeOFF = () => {
    update(ref(database,`buzzer1`),{
      value:false
    })
  }
  // const handleChange = (e) => {
  //   setDatas(e.target.value)
  // }
    return (
      <div>
        
          
         <div className="flex items-center justify-center flex-col ">
          <div className="border-solid border-2 border-black p-6 rounded-3xl">
          {datas.map((d,i)=>(
              <div key={i} className='flex items-center justify-center'>
                <p className='font-bold'>{d.value}</p>
              </div>
            ))}
            <div className="flex justify-between">
            <button onClick={handleSubmitChangeON} className='bg-green-500 p-2 rounded-md text-white mr-3'>ON</button>
            <button onClick={handleSubmitChangeOFF} className='bg-red-500 p-2 rounded-md text-white'>OFF</button>
            </div>
          </div>
         </div>
      </div>
    )
  
  
}

export default Waste