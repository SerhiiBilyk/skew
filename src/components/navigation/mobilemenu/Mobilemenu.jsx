import React from 'react';
import ReactDOM from 'react-dom';
import './mobilemenu.scss';
import {bar} from '../bar.jsx';

class Mobilemenu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var items = bar.map(function(elem, index) {
      return <li key={index} className="mobilemenu__item">{elem.name}</li>
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
      <ul className={`mobilemenu ${display(show)}`}>
        {items}
      </ul>

    )
  }
}
export default Mobilemenu;
