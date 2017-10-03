import React from 'react';
import ReactDOM from 'react-dom';
import './skew.scss';

class Skew extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className='skew'>
        <div className='skew__rotate'></div>
      </div>
    )
  }
}
export default Skew;
