import React from 'react';
import ReactDOM from 'react-dom';
import styles from './skew.scss';

export class Skew extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className={styles.skew}>
        <div className={styles['skew__rotate']}></div>
      </div>
    )
  }
}
