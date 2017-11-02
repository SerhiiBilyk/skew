import React from 'react';
import ReactDOM from 'react-dom';
import CSSModules from 'react-css-modules';
import styles from './diagram.scss';

import Wrapper from '../global/Wrapper/wrapper.jsx';

const percentage=[66,82,41];

class Diagram extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var circles=percentage.map(function(elem,index){
      return(
        <div key={index} styleName='circle' per={`${elem}%`}>
        { /* <svg width="92" height="92" >
            <circle r="46" cx="46" cy="46" stroke="#70c542" stroke-dasharray={`${(289/100)*elem} 289`} stroke-width="10" styleName={`item-${index+1}`}/>
          </svg>
          */}
         <div styleName={`pie`} ></div>
        </div>
      )
    })
    return (
      <Wrapper>
        <div styleName='diagram'>
          {circles}
        </div>
      </Wrapper>
    )
  }
}

export default CSSModules(Diagram, styles, {allowMultiple: true});
