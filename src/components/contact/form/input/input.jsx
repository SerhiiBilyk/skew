import React from 'react';
import ReactDOM from 'react-dom';
import styles from './input.scss';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';

class Input extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  focusHandler(e){
    console.log('focus',e)
  }
  render(){
    return(
      <div styleName='field'>
        <input type={this.props.type} placeholder={this.props.placeholder}  onFocus={(e)=>this.focusHandler(e)}/>
      </div>
    )
  }
}
export default CSSModules(Input, styles, {allowMultiple: true})
