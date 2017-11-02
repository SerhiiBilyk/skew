import React from 'react';
import ReactDOM from 'react-dom';
import styles from './weare.scss';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import Wrapper from '../global/Wrapper/wrapper.jsx';
import Title from '../global/Title/title.jsx';



class WeAre extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <Wrapper>
        <p>WeAre</p>


      </Wrapper>
    )
  }
}

export default CSSModules(WeAre, styles, {allowMultiple: true})
