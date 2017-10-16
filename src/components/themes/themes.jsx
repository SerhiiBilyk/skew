import React from 'react';
import ReactDOM from 'react-dom';
import styles from './themes.scss';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import Wrapper from '../global/wrapper.jsx';

var config = [0,1,2,3,4,5,6,7,8,9];

class Themes extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var cells = config.map(function(elem, i) {
      return (
        <div key={i} styleName={`cell item-${i+1}`}>
          <div styleName='glass'>
            <span className='fa fa-search fa-2x'></span>
          </div>
          <div styleName='mask'></div>
          <div styleName='child'>
              <span className='fa fa-eye'></span>
              <span className='fa fa-heart'></span>
              <span className='fa fa-heart-o'></span>
          </div>
        </div>
      )
    })
    console.log('cells', cells)
    return (
      <Wrapper>
        <div styleName='themes'>
          {cells}
        </div>
      </Wrapper>
    )
  }
}

export default CSSModules(Themes, styles, {allowMultiple: true})
