import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from '../navigation/navigation.jsx';
import './slider.scss';

var content = [
  {
    id: 1,
    text: ''
  }, {
    id: 2,
    text: ''
  }, {
    id: 3,
    text: ''
  }
]
/**
 * [Button description]
 * @param {function} changeSlide parent method, switches the slides
 * @param {boolean} focused button pressed, active
 * @param {integer} slide slide number
 */
function Button(props) {
  var {changeSlide, slide, focused} = props;
  var focus = focused
    ? 'focus'
    : '';
  return (
    <span className='slider__control--cell'>
      <button disabled={!!focus} className={`slider__button ${focus}`} onClick={(e) => changeSlide(slide)}></button>
    </span>
  )
}
/**
 * [Slide description]
 * @param  {boolean} active true if slide is active
 * @param {integer} previous prev slide
 */
function Slide(props) {
  var {active, previous} = props;
  var fadeOut = previous ? 'fadeOut':'';
  return (
    <li className={'slider__slide ' + (active?'show': '') + (fadeOut) + ' x-' + (props.index + 1/*because SASS loop start from 1*/)}>
      <p>{props.content}</p>
    </li>
  )
}
/**
 * [slides description]
 * @param  {integer} active active slide
 * @param {integer} previous prev slide
 */
class Slides extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var {content, current, previous} = this.props;
    var slides = content.map((elem, index) => {
      var active = index === current
        ? true
        : false;
      var prev = index === previous
        ? true
        : false;
      return <Slide key={index} index={index} content={content[index].text} previous={prev} active={active}/>
    })

    return (
      <ul className="slider">
        {slides}
      </ul>
    )
  }

}

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0

    }
    this.changeSlide = this.changeSlide.bind(this);
    this.current = this.state.current;
  }
  changeSlide(slideID) {
    this.setState({
      prev: this.state.current,
      current: slideID
    })
  }
  render() {
    var buttons = content.map((elem, index) => {
      var focused = this.state.current === index
        ? true
        : false;
      return <Button key={index} changeSlide={this.changeSlide} slide={index} focused={focused}/>
    })

    return (
      <div className="wrapper">
        <Navigation/>
        <Slides content={content} current={this.state.current} previous={this.state.prev}/>
        <div className='slider__control'>
         {buttons}
       </div>

      </div>
    )
  }
}
export default Slider;
