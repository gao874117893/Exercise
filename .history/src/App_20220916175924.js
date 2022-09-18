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
      this.parentRef.current.addEventListener("click",() => {
        console.log("原生事件，父元素DOM事件监听！");
        
      });
      this.childRef.current.addEventListener("click",() =>　{
        console.log(`原生事件：子元素DOM事件监听！`);

      });
      document.addEventListener("click",(e) => {
        console.log("原生事件：document DOM 事件监听！");
      });

    }

    parentClickFun = () => {
      console.log("React事件，父元素事件监听！");
    };
    childClickFun = () => {
      console.log("React事件，子元素事件监听！");
    }
    render(){
      return(
        <div ref={this.parentRef} onClick={this.parentClickFun}>
          <div ref={this.childRef} onClick={this.childClickFun}></div>
        </div>
      )
    }
}

export default App;
