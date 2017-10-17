import React from 'react';
import ReactDOM from 'react-dom';
import styles from './icon.scss';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';



class Icon extends React.PureComponent{
  constructor(props){
    super(props);
  }
  render(){
    var {theme,size,icon}=this.props;
    return(
      <div styleName={`circle ${this.props.theme} ${this.props.size}`}>
          <span className={`fa fa-${this.props.icon} fa-2x`}></span>
      </div>
    )
  }
}

Icon.propTypes = {
  theme: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}
export default CSSModules(Icon, styles, {allowMultiple: true})
