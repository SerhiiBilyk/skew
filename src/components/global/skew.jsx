import React from 'react';
import ReactDOM from 'react-dom';
import styles from './skew.scss';
import CSSModules from 'react-css-modules';




export const Skew=(props)=>(
  <div styleName='skew'>
    <div styleName='rotate'></div>
  </div>
);


export default CSSModules(Skew,styles);
