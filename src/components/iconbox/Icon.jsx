import React from 'react';
import ReactDOM from 'react-dom';
import styles from './icon.scss';
import CSSModules from 'react-css-modules';




class Icon extends React.PureComponent{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div styleName='circle'>
          <span className={`fa fa-${this.props.icon} fa-2x`}></span>
      </div>
    )
  }
}


export default CSSModules(Icon, styles, {allowMultiple: true})
