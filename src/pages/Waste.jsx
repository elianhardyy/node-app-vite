import React, { useEffect, useState } from 'react'
import { get,ref, onValue } from "firebase/database";
import { database } from '../utils/firebaseConfig';
import mqtt from "mqtt";

const username = "hivemq.webclient.1713603395933"
const password = "8w&4HJLv;@thy7M6eVT#"

var client = mqtt.connect("ws://6cb1df3c593b40828249b433fba92e37.s1.eu.hivemq.cloud:8883/mqtt",{
  host:"6cb1df3c593b40828249b433fba92e37.s1.eu.hivemq.cloud",
  port:8883,
  protocol:'mqtt',
  username:"hivemq.webclient.1713603395933",
  password:"8w&4HJLv;@thy7M6eVT#"
})
const Waste = () => {
  const [datas, setDatas] = useState([]);
  const [error,setError] = useState(null);
  const [isLoaded,setIsLoaded] = useState(false);
  useEffect(()=>{
    // client.on("connect",async()=>{
    //   console.log("connected")
    // });
    // client.on("error",(error)=>{
    //   console.log(error)
    // })
    const useRef = ref(database,'testing');
    onValue(useRef,(snapshot)=>{
      setDatas([]);
      const dataRtdb = snapshot.val();
      if(dataRtdb !== null){
        // Object.values(dataRtdb).map((d)=>{
        //   console.log(d);
        //   setDatas(d)
        // })
        const po = Object.entries(dataRtdb).map(([d,v])=>({
          d,
          v
        }))
        console.log(po);
        setDatas(po)
      }
    })
    
    // get(useRef).then((snapshot)=>{
    //   if(snapshot.exists()){
    //     const dataArray = Object.entries(snapshot.val()).map(([data,val])=>({
    //       data,
    //       val
    //     }))
    //     setIsLoaded(true);
    //     setDatas(dataArray)
    //     console.log(dataArray);
    //   }else{
    //     console.log('no data available')
    //   }
    // },(error)=>{
    //   setIsLoaded(true);
    //   setError(error)
    // }).catch((error)=>{
    //   console.log(error)
    // })
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