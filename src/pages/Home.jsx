import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/userContext'
import { useNavigate } from 'react-router-dom';
import { api } from '../utils/axios';
import { useCookies } from 'react-cookie';
import axios from 'axios';

const Home = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    const [cookies,removeCookies] = useCookies();
    const [user, setUser] = useState();
    //axios.defaults.withCredentials = true
    let token = localStorage.getItem("token");
    useEffect(()=>{
        (async()=>{
            try {
                console.log(cookies);
                // if(cookies){
                    // }
                const response = await axios.get("https://api-elian-app.vercel.app/api/v1/user/dashboard",{
                    withCredentials:true,
                    headers:{
                        Authorization:`Bearer ${token}`,
                        
                    }
                })
                axios.defaults.withCredentials = true
                axios.defaults.headers.common.Authorization = `Bearer ${cookies.accessToken}`
                console.log(response.data.data.username)
                setUser(response.data.data.username)
            } catch (error) {
                console.log(error);
            }
        })()
    },[cookies])

    const handleLogout = () => {
        axios.post('https://api-elian-app.vercel.app/api/v1/auth/logout',{
            withCredentials:true,
            headers:{
                Authorization:`Bearer ${token}`
            }
        }).then((response)=>{
            console.log(response);
        })
        localStorage.removeItem("token");
        navigate('/login')
    }
  return (
    <div>
        hello {user}
        <button onClick={handleLogout} className='bg-red-500 w-[100px] h-[100px] p-2'>Logout</button>
    </div>
  )
}

export default Home