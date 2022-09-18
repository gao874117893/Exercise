import logo from './logo.svg';
import './App.css';
import React, { useState,useMemo,useEffect } from 'react';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      message:"hello world"
    }
  }

  changeText(){
    this.setState({
      message:"JS每日一题"
    })
  }

  render(){
    return(
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={e => this.changeText()}>面试官系列</button>
      </div>
    )
  }
}

export default App;
