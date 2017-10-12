import React from 'react';
import ReactDOM from 'react-dom';
import Slider from '../slider/slider.jsx';
import Skew from './../global/skew.jsx';
import CSSModules from 'react-css-modules';
import styles from './header.scss';

 class Header extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div styleName='header'>
        <Slider/>
        <Skew/>
      </div>
    )
  }
}


export default CSSModules(Header, styles)
