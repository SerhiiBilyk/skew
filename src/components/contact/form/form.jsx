import React from 'react';
import ReactDOM from 'react-dom';
import styles from './form.scss';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import Input from './input/input.jsx';


class Form extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    var plc = 'hello';
    return (
      <div styleName='form'>
        <form action='#' method='post'>
        <Input type='text' placeholder='Name *' />
        <Input type='email' placeholder='Email *' />
          <Input type='text' placeholder='Subject*' />

          <div styleName='field'>
            <textarea placeholder='Message *'></textarea>
          </div>
        </form>
      </div>
    )
  }
}

export default CSSModules(Form, styles, {allowMultiple: true})
