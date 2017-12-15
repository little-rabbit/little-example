import React, { Component } from 'react';
import Home from '../components/home';
import AddStr from '../components/addStr'
class Roots extends Component{
  constructor(props){
    super(props);
  }
  render(){
    const mystyle={
      width:'100%',
      height:'100%',
      background:'#ccc'
    };
    return (
      <div style={mystyle}>
        <Home/>
        <AddStr/>
      </div>
    )
  }
}
export default Roots;
