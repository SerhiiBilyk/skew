import React from 'react';
import ReactDOM from 'react-dom';
import './hamburger.scss';

class Hamburger extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('props', this.props)
    var collapsed = this.props.collapsed;
    var display=(collapsed)=>{
      if(!collapsed){
        return ''
      }else if(collapsed){
        return 'expanded'
      }
    }
    return (
      <ul id="hamburger"
        className={`hamburger ${display(collapsed)}`}
        onClick={(e) => this.props.change(e)}>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    )
  }
}
export default Hamburger;
