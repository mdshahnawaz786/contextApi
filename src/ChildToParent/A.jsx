import React, { useState } from "react";
import B from "./B";
import cpContext from "./contextData";

const A = () => {
    const [state, setState] = useState("")
  return (
    <div>
      <h3>A component</h3>
      <p>Data from D: {state}</p>
      <hr />
      <cpContext.Provider value={{setState}}>
        <B />
      </cpContext.Provider>
    </div>
  );
};

export default A;
