import React from 'react';
import ReactDOM from 'react-dom';
import CSSModules from 'react-css-modules';
import styles from './results.scss';
import Icon from '../iconbox/Icon.jsx';
import Wrapper from '../global/wrapper.jsx';

var config = [
  {
    icon: 'thumbs-o-up',
    header: 'Awesome Works'
  }, {
    icon: 'users',
    header: 'Happy Customers'
  }, {
    icon: 'coffee',
    header: 'Cups of coffee'
  }
]

class Timer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
      start: false
    }
    this.handlePageYOffset = this.handlePageYOffset.bind(this);
    this.timerStart = false;

  }
  componentDidMount() {
    window.addEventListener('scroll', this.handlePageYOffset, {passive: true})
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handlePageYOffset);
  }
  handlePageYOffset() {
    /**
 * if timer appears in visible zone
 * set START flag to true
 * and invoke callback setInterval 'timer'
 * each time when setInterval invokes this.step function, it check timer value
 * if timer value greate then 1000, it will stop
 */
    if ((window.pageYOffset - this.timerElement.offsetTop) > (window.innerHeight * -1)) {
      this.setState({
        start: true
      }, () => this.timerID = setInterval(() => this.step(), 0))
      window.removeEventListener('scroll', this.handlePageYOffset);
    }
  }
  componentWillUnmount() {
    clearInterval(this.timerID)
  }
  step() {
    this.setState((prevState) => {
      return {
        timer: prevState.timer + this.props.step
      }
    })
    /*if timer value > max value = stop timer*/
    this.state.timer >= this.props.max && clearInterval(this.timerID)
  }
  render() {
    return (
      <div>
        <p ref={timerElement => this.timerElement = timerElement}>{this.state.timer}</p>
      </div>
    )
  }
}

class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var cells = config.map(function(elem, i) {
      console.log(elem)
      return (
        <div styleName='cell' key={i}>
          <Icon icon={elem.icon}/>

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

          </div>
        </Wrapper>
      </div>
    )
  }
}

export default CSSModules(Results, styles, {allowMultiple: true});
