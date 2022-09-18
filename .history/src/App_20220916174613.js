import logo from './logo.svg';
import './App.css';
import React, { useState,useMemo,useEffect } from 'react';

class App extends React.Component{
    constructor(props){
      super(props);
      this.parentRef = React.createRef();
      this.childRef = React.createRef();

    }

    componentDidMount(){
      console.log("React componentDidMount!");
      this.parentRef.current?.addEventListener("click",() => {
        console.log("原生事件，父元素DOM事件监听！");

      })
    }
}

export default App;
