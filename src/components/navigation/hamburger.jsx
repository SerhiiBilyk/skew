import React from 'react';
import ReactDOM from 'react-dom';
import './hamburger.scss';

class Hamburger extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('sdf',this.props.collapsed)
    return (
      <ul id="hamburger"
        className={`hamburger ${this.props.collapsed?'':'expanded'}`}
        onClick={(e) => this.props.change(e)}>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    )
  }
}
export default Hamburger;
