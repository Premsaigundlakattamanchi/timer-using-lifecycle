import React, { Component } from 'react'
import "./index.css"
export default class Clock extends Component {
    state={date:new Date()}

 componentDidMount(){
     this.timerId=setInterval(this.tick,1000)
 }

 tick=()=>{
     this.setState({date:new Date()})
 }

 componentWillUnmount(){
     clearInterval(this.timerId)
 }


  render() {
      const {date}=this.state
    return (
      <div className='clock-container'>
         <h1>Clock</h1>
        <p className='text'>{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
