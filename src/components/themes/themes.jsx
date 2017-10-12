import React from 'react';
import ReactDOM from 'react-dom';
import styles from './themes.scss';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import Wrapper from '../global/wrapper.jsx';

var config = [1,2,3,4,5,6,7,8,9,10];

class Themes extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var cells = config.map(function(elem, i) {
      return (
        <div key={i} styleName='cell'>
          <p>dsf</p>
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
