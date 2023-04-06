import React, { useContext } from 'react'
import pcContext from './Context'

const Four = () => {
    const DataFromParent = useContext(pcContext)
    console.log(DataFromParent);
  return (
    <div>
      <h3>Fourth Components</h3>
      <p>Data from First Component: {DataFromParent}</p>
    </div>
  )
}

export default Four
