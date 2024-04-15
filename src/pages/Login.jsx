import React, { useState } from 'react'
// import { useAuth } from '../context/userContext';
import { useNavigate } from 'react-router-dom';
import { api } from '../utils/axios';
import axios from 'axios';
import { useCookies } from 'react-cookie';

const Login = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('')
    // const auth = useAuth();
    const [cookies, setCookie] = useCookies(['accessToken','refreshToken']) 
    const navigate = useNavigate();
    const userLogin = async () => {
        
    }
    const handleLogin = async(e) => {
        e.preventDefault()
        const {data} = await axios.post("https://api-elian-app.vercel.app/api/v1/auth/login",{email,password},
        {
            withCredentials:true,
            headers:{ 
                "Content-Type": "application/json",
            }})
            .catch((error)=>{console.log(error)})
        axios.defaults.withCredentials = true
        axios.defaults.headers.common.Authorization = `Bearer ${data['accessToken']}`
        localStorage.setItem("token",data['accessToken']);
        //setCookie('accessToken',data['accessToken'],{path:"/", expires:new Date(Date.now) + 86400000})
        setEmail('')
        setPassword('')
        navigate('/')
    }
  return (
    <>
        <div className="hero-register min-h-screen flex items-center justify-center bg-cover bg-center">
            <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-4 text-center">Login</h2>
            <form className="space-y-4" onSubmit={handleLogin}>
                <div>
                <label htmlFor="email" className="block font-medium">Email</label>
                <input type="email" name="email" id="email" className="form-input w-full rounded-md" onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div>
                <label htmlFor="password" className="block font-medium">Password</label>
                <input type="password" name="password" id="password" className="form-input w-full rounded-md" onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md">Login</button>
            </form>
            </div>
        </div>
    </>
    
  )
}

export default Login