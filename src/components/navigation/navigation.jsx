import React from 'react';
import ReactDOM from 'react-dom';
import CSSModules from 'react-css-modules';
import styles from './navigation.scss';
import img from './img/logo.png';
import MenuItems from './menu/menuItems.jsx';
import Hamburger from './hamburger/hamburger.jsx';
import Logo from './logo/logo.jsx';
import css from '../global/cssmodules.js';



/*
TODO
# make content a little bit less, to 60%, also minify logo and bar
# continue with menu in tablet mode
# don't forget to use CSSModules
 */

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      /*initial state*/
      collapsed: 1.1,
      windowWidth: window.innerWidth
    }
    this.changeState = this.changeState.bind(this);
    this.handleResize = this.handleResize.bind(this)
  }
  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }
  /*
    toggling between 3 states:
    1.1 - initial
    0- expanded
    1 -collapsed
     */
  changeState(e) {
    this.setState({
      collapsed: this.state.collapsed ^ 1
    })
  }
  /**
   * [display description]
   * This function implements CSS logic for changeState function
   * @param  {number} show -> this.state.collapsed
   * @return {string} css class
   */
  display(show){
    return show > 1 ? '': !show ? 'show': 'hide';
  }
  handleResize() {
    /*Reset css classes in mobilemenu*/
    (window.innerWidth > 1024) && this.setState({collapsed: 1.1})
  }
  render() {
    return (
      <div styleName='navigation'>
        <div styleName='content'>
          <Logo img={img}/>
          <div styleName='bar'>
            <MenuItems theme='pc' display={this.display} />
            <Hamburger change={this.changeState} collapsed={this.state.collapsed}/>
          </div>
        </div>
        <div >
          <MenuItems theme='mobile' collapsed={this.state.collapsed} display={this.display}/>
        </div>
      </div>
    )
  }
}
export default CSSModules(Navigation,styles);
