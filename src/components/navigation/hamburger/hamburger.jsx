import React from 'react';
import ReactDOM from 'react-dom';
import styles from './hamburger.scss';
import CSSModules from 'react-css-modules';
import css from  '../../global/cssmodules.js';

class Hamburger extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var hamburgerCSS='hamburger '+(this.props.collapsed?'':'expanded');
    return (
      <ul id="hamburger"
        styleName={hamburgerCSS}
        onClick={(e) => this.props.change(e)}>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    )
  }
}
export default CSSModules(Hamburger,styles,{allowMultiple:true})
