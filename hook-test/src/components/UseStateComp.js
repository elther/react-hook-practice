import React, {useState} from 'react';

export default function UseStateComp(props){
    var [numberState, setNumberState] = useState(0);
    return (
      <div className="container">
        <h1>UseState</h1>
        <div>
          <p>here is number : {numberState}</p>
          <button onClick={()=>setNumberState(Math.random())}>random number</button>
        </div>
      </div>
    );
}
