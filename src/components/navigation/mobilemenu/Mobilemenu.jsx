import React from 'react';
import ReactDOM from 'react-dom';
import styles from './mobilemenu.scss';
import {bar} from '../bar.jsx';
import css from  '../../global/cssmodules.js';



import TestRenderer from 'react-test-renderer';

function Link(props) {
  return <a href={props.page}>{props.children}</a>;
}

const testRenderer = TestRenderer.create(
  <Link page="https://www.facebook.com/">Facebook</Link>
);

console.log(testRenderer.toJSON());
// { type: 'a',
//   props: { href: 'https://www.facebook.com/' },
//   children: [ 'Facebook' ] }


export class Mobilemenu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var items = bar.map(function(elem, index) {
      return <li key={index} className={styles.item}>{elem.name}</li>
    })
    var show=this.props.show;
console.log('show',show)
/*
toggling between 3 states:
1.1 - initial
0- expanded
1 -collapsed
 */
    var display=(show)=>show>1?'':!show?'show':'hide';
    return (
      <ul className={css(styles.mobilemenu,styles[`${display(show)}`])}>
        {items}
      </ul>

    )
  }
}
