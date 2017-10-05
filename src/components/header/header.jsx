import React from 'react';
import ReactDOM from 'react-dom';
import {Slider} from '../slider/slider.jsx';
import {Skew} from './../global/skew.jsx';




export class Header extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <Slider/>
        <Skew/>
      </div>
    )
  }
}
