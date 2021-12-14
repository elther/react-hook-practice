import React, {useState,useEffect} from 'react';
import UseEffectChildComp from './UseEffectChildComp';

export default function UseEffectComp(props){
    var [numberState, setNumberState] = useState(0);
    var [clickCountState, setClickCountState] = useState(0);
    var [countShow, setCountShow] = useState(true);

    useEffect(()=>{
      if(numberState > 0){
        setClickCountState(clickCountState +1);
      }
    },[numberState]);

    return (
      <div className="container">
        <h1>UseEffect</h1>
        <div>
          <p>click count status : {countShow.toString()}</p>
          {countShow ? <UseEffectChildComp clickCount={clickCountState} /> : null}
          <p>here is number : {numberState}</p>
          <button onClick={()=>setNumberState(Math.random())}>random number</button>
          <button onClick={()=>setCountShow(false)}>stop random</button>
        </div>
      </div>
    );
}
