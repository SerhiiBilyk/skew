import React from 'react';
import ReactDOM from 'react-dom';
import styles from './hamburger.scss';
import css from  '../global/cssmodules.js';
console.log('hamburger',styles)
export class Hamburger extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('sdf',this.props.collapsed)
    return (
      <ul id="hamburger"
        className={
          css(
            styles.hamburger,
            styles[`${this.props.collapsed?'':'expanded'}`]
          )}
        onClick={(e) => this.props.change(e)}>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    )
  }
}
