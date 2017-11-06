import React from 'react';
import ReactDOM from 'react-dom';
import styles from './tabs.scss';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import Icon from '../../iconbox/Icon.jsx';
import Timer from '../../global/Timer/Timer.jsx';

import {config} from './config.jsx';

class Tabs extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    }
  }
  go(e, arg) {
    console.log('go', e, arg)
    this.setState({current: arg})
  }
  render() {
    var generator = (config, prop) => {
      return config.map((elem, index) => {
        return (
          <p key={index} styleName='type'>
            <button onClick={e => this.go(e, index)} styleName={index == this.state.current
              ? 'active'
              : 'none'}>{elem[prop]}</button>
          </p>
        )
      })
    }
    var text = config.map((elem, index) => {
      return (
        <p key={index} styleName={index == this.state.current
          ? 'visible'
          : 'hide'}>{elem.text}</p>
      )
    })
    return (
      <div id='tabs' styleName='tabs'>
        <div styleName='tech'>{generator(config, 'tech')}</div>
        <div styleName='description'>
          {text}
        </div>
        <div styleName='customers'>
          <div styleName='icon'>
            <Icon icon='group' theme='black' size='middle'/>
          </div>
          <div styleName='content'>
            <Timer max={12400} step={100} container='testimonial'/>
            <p>Hello</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CSSModules(Tabs, styles, {allowMultiple: true})
