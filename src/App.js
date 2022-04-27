 import React, { Component } from 'react'
 import Clock from './components/clock'
 import "./App.css"
 export default class App extends Component {
   state={buttonClicked:false}

   toggleButton=()=>{
     this.setState(prevState=>({
       buttonClicked:! prevState.buttonClicked
     }))
   }


   render() {
     const {buttonClicked}=this.state
     return (
       <div className='bg-container'>
          <button type="submit"  onClick={this.toggleButton} className="button">
            {buttonClicked ? " Hide clock":"Show clock"}
          </button>
           {buttonClicked && <Clock/>}
       </div>
     )
   }
 }
 