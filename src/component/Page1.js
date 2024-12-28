import React from 'react'
import { useNavigate } from 'react-router-dom'

function Page1() {
        const navigate= useNavigate()

        const handlebutton=()=>{
            navigate('/move')
        }
  return (
    <div style={ {backgroundColor: 'brown', padding: '50px', textAlign: 'center'}}>
        <h2> welcome to our travel website</h2>
        <button onClick={handlebutton}>next</button>
      
    </div>
  )
}

export default Page1
