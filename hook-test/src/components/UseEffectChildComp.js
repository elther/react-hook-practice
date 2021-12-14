import React, {useState,useEffect} from 'react';

var funcStyle = 'color:blue';
export default function UseEffectChildComp(props){
  var [clickCountState, setClickCountState] = useState('show');
  useEffect(()=>{
    return ()=>{
      console.log('%cfunc => useEffect (componentDidMount & componentDidUpdate) : click count hide', funcStyle);
    };
  },[]);

  return (
    <div>
      <p>click count : {props.clickCount}</p>
    </div>
  );
}
