import React from 'react';
import ReactDOM from 'react-dom';
import CSSModules from 'react-css-modules';
import styles from './results.scss';
import Icon from '../iconbox/Icon.jsx';
import Wrapper from '../global/Wrapper/wrapper.jsx';
import Button from '../global/Button/button.jsx';
import Timer from '../global/Timer/timer.jsx';

var config = [
  {
    icon: 'thumbs-o-up',
    header: 'Awesome Works',
    max: 608,
    step: 2
  }, {
    icon: 'users',
    header: 'Happy Customers',
    max: 12400,
    step: 20
  }, {
    icon: 'coffee',
    header: 'Cups of coffee',
    max: 10000,
    step: 20
  }
]

class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var cells = config.map(function(elem, i) {
      console.log(elem)
      return (
        <div styleName='cell' key={i}>
          <div styleName='icon'>
            <Icon icon={elem.icon} theme='white' size='middle'/>
          </div>
          <div styleName='content'>
            <p styleName='timer'>
              <Timer max={elem.max} step={elem.step}/>
            </p>
            <p styleName='header'>
              {elem.header}
            </p>
          </div>
        </div>
      )
    })
    return (
      <div styleName='results'>
        <Wrapper>
          <div styleName='row'>
            {cells}
          </div>
          <div styleName='row'>
            <p styleName='text'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu mi quis mauris venenatis viverra. Pellentesque pellentesque rutrum arcu, eu lacinia dui eleifend sed. Donec fermentum, nisi eget pharetra venenatis, purus augue ultrices elit, quis auctor dolor diam ac nibh. Etiam rutrum aliquet vestibulum. Etiam ligula elit, molestie sed sagittis sed, mollis et elit. Phasellus vehicula.</p>
            <Button theme='empty' text='View All Works'/>
              <Button theme='filled' text='Place an Order'/>
          </div>
        </Wrapper>
      </div>
    )
  }
}

export default CSSModules(Results, styles, {allowMultiple: true});
