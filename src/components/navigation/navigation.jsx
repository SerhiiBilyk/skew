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
  changeState(e) {
    this.setState({
      collapsed: this.state.collapsed ^ 1
    })
  }
  handleResize() {
    /*Reset css classes in mobilemenu*/
    (window.innerWidth > 1024) && this.setState({collapsed: 1.1})
  }
  render() {
    return (
      <div className={styles.navigation}>
        <div className={styles.content}>
          <Logo img={img}/>
          <div className={styles.bar}>
            <MenuItems theme='pc' />
            <Hamburger change={this.changeState} collapsed={this.state.collapsed}/>
          </div>
        </div>
        <div className={styles.mobile}>
          <MenuItems show={this.state.collapsed} theme='mobile' collapsed={this.state.collapsed}/>
        </div>
      </div>
    )
  }
}
export default CSSModules(Navigation,styles);
