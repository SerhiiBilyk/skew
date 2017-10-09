import React from 'react';
import ReactDOM from 'react-dom';
import CSSModules from 'react-css-modules';
import styles from './menuItems.scss';
import {bar} from '../bar.jsx';
import css from '../../global/cssmodules.js';
import Link from '../../global/link/link.jsx';

class MenuItems extends React.Component {
  constructor(props) {
    super(props);
  }
  /**
   * [foo description]
   * @param  {JSON} arg JSON navigation content
   * @param  {Number} [deep=0] nesting level of UL element   *
   * if deep==0 it is mean that it is first UL element,
   * and react will show him[styles.items]
   * other sub-UL element will be hidden [styles.sub]*
   *
    */
   mouseEnter(e){
     console.log('mouse enter',e.currentTarget)
   }
  menuGenerator(arg, deep = -1) {
    ++deep
    var show = this.props.show;
    /*
      toggling between 3 states:
      1.1 - initial
      0- expanded
      1 -collapsed
       */
    var display = (show) => show > 1 ? '' : !show ? 'show' : 'hide';
    var containerCSS = deep ? 'sub' : `items ${this.props.theme} ${display(show)}`;
    return (
      <ul deep={deep} styleName={containerCSS}>
        {arg.map((elem, index) =>
        /*if element contains 'sub' property, recursion goes deeper and each time increment deep indicator*/
        elem.sub
          ? <li key={index} styleName='container item' deep={deep} onMouseEnter={(e)=>this.mouseEnter(e)}>
            <Link content={elem.name} to='/other'/>
            {this.menuGenerator(elem.sub,deep)}
          </li>
          /*if no react just return LI element*/
          : <li key={index} styleName='item'>
              <Link content={elem.name} to='/home'/>
          </li>)}
      </ul>
    )
  }
  render() {
    return this.menuGenerator(bar)
  }
}
export default CSSModules(MenuItems, styles, {allowMultiple: true});
