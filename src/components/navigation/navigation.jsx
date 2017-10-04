import React from 'react';
import ReactDOM from 'react-dom';
import './navigation.scss';
import img from './img/logo.png';
import Hamburger from './hamburger.jsx';
import Mobilemenu from './mobilemenu/Mobilemenu.jsx';
import {bar} from './bar.jsx';


class Items extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var items = bar.map(function(elem, index) {
      return <li key={index} className="navigation__item">{elem.name}</li>
    })
    return (
      <ul className='navigation__items'>
        {items}
      </ul>
    )
  }
}

var Logo = (props) => (
  <div className='navigation__logo'>
    <img src={props.img}/>
  </div>
)
class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: 1.1/*initial state*/
    }
    this.changeState=this.changeState.bind(this)
  }
  changeState(e) {
    this.setState({
      collapsed: this.state.collapsed ^ 1,
    }, this.animation)

  }
  animation() {
    console.log('collapsed state:: ',this.state.collapsed)

  }
  render() {
    return (
      <div className='navigation'>
        <div className='navigation__content'>
          <Logo img={img}/>
          <div className='navigation__bar'>
            <Items/>
            <Hamburger
              change={this.changeState}
              collapsed={this.state.collapsed}
            />
          </div>

        </div>
        <Mobilemenu show={this.state.collapsed} />
      </div>
    )
  }
}

export default Navigation;
