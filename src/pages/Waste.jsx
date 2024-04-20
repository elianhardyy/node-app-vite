import React, { useEffect, useState } from 'react'
import { ref, onValue } from "firebase/database";
import { database } from '../utils/firebaseConfig';

const Waste = () => {
  const [datas, setDatas] = useState([]);
  useEffect(()=>{
    
    const useRef = ref(database,'testing');
    onValue(useRef,(snapshot)=>{
      setDatas([]);
      const dataRtdb = snapshot.val();
      if(dataRtdb !== null){
        
        const po = Object.entries(dataRtdb).map(([d,v])=>({
          d,
          v
        }))
        console.log(po);
        setDatas(po)
      }
    })
    
  },[]);
  
    return (
      <div>
        <div>
          {datas.map((d,i)=>(
            <div key={i}>
              {d.v}
            </div>
          ))}
        </div>
      </div>
    )
  
  
}

export default Waste