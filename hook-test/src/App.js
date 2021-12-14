import React, {useState} from 'react';
import UseStateComp from './components/UseStateComp';
import UseEffectComp from './components/UseEffectComp';
import UseContextComp from './components/UseContextComp';
import UseCallbackComp from './components/ext/UseCallbackComp';
import UseDebugValueComp from './components/ext/UseDebugValueComp';
import UseImperativeHandleComp from './components/ext/UseImperativeHandleComp';
import UseLayoutEffectComp from './components/ext/UseLayoutEffectComp';
import UseMemoComp from './components/ext/UseMemoComp';
import UseReducerComp from './components/ext/UseReducerComp';
import UseRefComp from './components/ext/UseRefComp';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <UseStateComp />
      <UseContextComp />
      <UseEffectComp />
      <div>
        ext

        <UseCallbackComp />
        <UseDebugValueComp />
        <UseImperativeHandleComp />
        <UseLayoutEffectComp />
        <UseMemoComp />
        <UseReducerComp />
        <UseRefComp />
      </div>
    </div>
  );
}

export default App;
