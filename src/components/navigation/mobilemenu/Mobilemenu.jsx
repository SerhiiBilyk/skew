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

    var initial=1<<0;
    var visible=2<<0;
    var hidden=3<<0;

    var display=(show)=>{
      if(show===undefined){
        return ''
      }else if(show===true){
        return 'show'
      }else if(show===false){
        return 'hide'
      }

    }
    return (
      <ul className={`mobilemenu ${display(show)}`}>
        {items}
      </ul>

    )
  }
}
export default Mobilemenu;
