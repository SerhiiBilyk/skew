import React from 'react';
import ReactDOM from 'react-dom';
import CSSModules from 'react-css-modules';
import styles from './menuItems.scss';
import {bar} from '../bar.jsx';
import css from '../../global/cssmodules.js';
import Link from '../../global/link/link.jsx';
import ListContainer from './ListContainer.jsx';
import ListItem from './ListItem.jsx';

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
  mouseEnter(e) {
    console.log('mouse enter', e.currentTarget)
  }

  menuGenerator(arg, deep = -1) {
    deep = deep + 1;
    var collapsed = this.props.collapsed;
    /*
      toggling between 3 states:
      1.1 - initial
      0- expanded
      1 -collapsed
       */
    var display = (show) => show > 1 ? '': !show ? 'show': 'hide';
    var containerCSS = deep ? 'sub': `items ${this.props.theme} ${display(collapsed)}`;

    return (
      <ListContainer deep={deep} css={containerCSS} collapsed={collapsed}>
        {arg.map((elem, index) =>
        /*if element contains 'sub' property, recursion goes deeper and each time increment deep indicator*/
        elem.sub
          ? <ListItem
            key={index}
            deep={deep}
            content={this.menuGenerator(elem.sub, deep)}
            name={elem.name}
            collapsed={this.props.collapsed}
            container/>
          /*if no react just return LI element*/
          : <ListItem key={index} name={elem.name}/>)}
      </ListContainer>
    )
  }
  render() {
    return this.menuGenerator(bar)
  }
}
export default CSSModules(MenuItems, styles, {allowMultiple: true});
