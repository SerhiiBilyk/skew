import React from 'react';
import ReactDOM from 'react-dom';
import styles from './contact.scss';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import Wrapper from '../global/Wrapper/wrapper.jsx';
import Form from './form/form.jsx';


class Contact extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <div styleName='contact'>
        <Wrapper>
          <div styleName='message'>
            <p>
              Get in Touch with Us!
            </p>
            <p>
              Your email address will not be published. Required fields are marked *
            </p>
                <Form/>

          </div>
          <div styleName='info'>
            <p>
              Contact Information
            </p>
          </div>


        </Wrapper>
      </div>
    )
  }
}

export default CSSModules(Contact, styles, {allowMultiple: true})
