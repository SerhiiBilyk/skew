import React from 'react';
import ReactDOM from 'react-dom';
import CSSModules from 'react-css-modules';
import styles from './logo.scss';

var Logo = (props) => (
  <div styleName='logo'>
    <img src={props.img}/>
  </div>
)
export default CSSModules(Logo,styles);
