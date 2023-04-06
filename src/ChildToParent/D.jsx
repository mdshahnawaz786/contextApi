import React, { useContext, useState } from 'react'
import cpContext from './contextData'

const D = () => {
    const {setState} = useContext(cpContext)
    const [dstate, dsetState] = useState("")
  return (
    <div>
      <h3>D component</h3>
      <input type="text" onChange={((e)=>{
        dsetState(e.target.value)
      })} />
      <button onClick={(()=>{
        setState(dstate)
      })}>send data to A</button>
    </div>
  )
}

export default D
