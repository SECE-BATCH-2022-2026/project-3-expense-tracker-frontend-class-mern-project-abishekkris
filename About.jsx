import React from 'react'
import { Link } from 'react-router-dom'
import App from './App'
import { useNavigate } from 'react-router-dom'

export default function About() {
   

    const navigate =useNavigate()
     const back =()=>{
        navigate("/")
     }
  
  
    return (
    <>
    <Link to="/">Back Page</Link>
    <div>About</div>
    <button  onClick={back}>Back</button>
    </>
   
    
  )
}
