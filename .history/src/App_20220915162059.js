import logo from './logo.svg';
import './App.css';
import { useState,useMemo,useEffect } from 'react';

function App() {
  const [number,setNumber] = useState(100);
  const [time,setTime] = useState(new Date());

  useEffect(() => {
    setTimeout(() => {
      setTime(new Date());
    },1000)
  },time)

  return (
    <div>
      <h1>{time.getSeconds()}</h1>
      <input type='text' value={number} onChange={e => {
        setNumber(e.target.value);
      }}>
      
      </input>
    </div>
  )
}

export default App;
