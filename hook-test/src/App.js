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
import TempContext from './components/context/Store';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <TempContext.Provider>
        <UseStateComp />
        <UseContextComp />
        <UseEffectComp />
        <div>
          <p><h1>ext</h1></p>
          <UseCallbackComp />
          <UseDebugValueComp />
          <UseImperativeHandleComp />
          <UseLayoutEffectComp />
          <UseMemoComp />
          <UseReducerComp />
          <UseRefComp />
        </div>
      </TempContext.Provider>
    </div>
  );
}

export default App;
