import React from 'react';
import ReactDOM from 'react-dom';
import CSSModules from 'react-css-modules';
import Skew from '../skew.jsx';


 class SkewSection extends React.PureComponent{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <Skew index={0}/>
        {this.props.children}
        <Skew index={0}/>
      </div>
    )
  }
}

export default CSSModules(SkewSection);
