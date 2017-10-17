import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
/**
 * TODO
 * IE and Firefox can't cleanInterval, infiniti loop, fix it
 */

class Timer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
      start: false
    }
    this.handlePageYOffset = this.handlePageYOffset.bind(this);
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
      <span ref={timerElement => this.timerElement = timerElement}>
        {this.state.timer}
      </span>
    )
  }
}
Timer.propTypes = {
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired
}
export default Timer;
