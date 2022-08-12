import './App.css';
import React, { Component } from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0
    }
  }
  handleDecrease = () => {
    console.log("decrease");
    if (this.state.value >= 1) {

      this.setState(prevState=>{
        return {value: prevState.value- 1}

      })
    }
  }
  handleIncrease = () => {
    console.log("increases")

    this.setState(prevState=>{
      return {value: prevState.value- 1}

    })
  }
  render() {
    { console.log("rendering") }
    return (

      <div className='counter'>

        <button onClick={this.handleIncrease}>+</button>

        <div className='display'>{this.state.value}</div>

        <button onClick={this.handleDecrease}>-</button>

      </div>
    )
  }
}
export default App;

