import React, { useState } from 'react'
import axios from "axios";
import { api } from '../utils/axios';
const Register = () => {
    const [username,setUsername] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    //const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        api.post('/auth/register',{username,email,password})
            .then(response=>{
                console.log(response.data)
                setUsername("")
                setEmail("")
                setPassword("")
            }).catch(err=>{
                console.log(err)
            })
        
    }
  return (
    <div>
        <div className="hero-register min-h-screen flex items-center justify-center bg-cover bg-center">
            <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-4 text-center">Register</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                <label htmlFor="username" className="block font-medium">Username</label>
                <input type="text" id="username" name="username" className="form-input w-full rounded-md" onChange={(e)=>setUsername(e.target.value)}/>
                </div>
                <div>
                <label htmlFor="email" className="block font-medium">Email</label>
                <input type="email" name="email" id="email" className="form-input w-full rounded-md" onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div>
                <label htmlFor="password" className="block font-medium">Password</label>
                <input type="password" name="password" id="password" className="form-input w-full rounded-md" onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md">Register</button>
            </form>
            </div>
        </div>
  </div>
  )
}

export default Register