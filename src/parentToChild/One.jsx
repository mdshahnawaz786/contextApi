import React, { useState } from "react";
import Two from "./Two";
import pcContext from "./Context";

const One = () => {
    const [ state, setState] = useState("")
    const [bstate, bSetState] = useState("")
  return (
    <div>
      <h3>First component</h3>
      <input type="text" onChange={((e)=>{
        setState(e.target.value)
      })} />
      <button onClick={(()=>{
            bSetState(state)
      })}>Send Data to Fourth comp</button>
      <hr />
      <pcContext.Provider value={bstate}>
        <Two />
      </pcContext.Provider>
    </div>
  );
};

export default One;
