import React from 'react';
import ReactDOM from 'react-dom';
import styles from './navigation.scss';
import img from './img/logo.png';
import {Hamburger} from './hamburger/hamburger.jsx';
import {Mobilemenu} from './mobilemenu/Mobilemenu.jsx';
import {bar} from './bar.jsx';
import css from  '../global/cssmodules.js';


function Items(props){
  /**
   * [foo description]
   * @param  {JSON} arg JSON navigation content
   * @param  {Number} [deep=0] nesting level of UL element
   */
  var listGenerator=(arg,deep=0)=>
  /**
   * if deep==0 it is mean that it is first UL element,
   * and react will show him[styles.items]
   * other sub-UL element will be hidden [styles.sub]*
   */
  <ul deep={deep}  className={deep?styles.sub:styles.items}>
  {arg.map((elem,index)=>
    /*if element contains 'sub' property, recursion goes deeper and each time increment deep indicator*/
  	elem.sub?
  		<li key={index} className={css(styles.container,styles.item)} deep={deep}>{elem.name}{listGenerator(elem.sub,++deep)}</li>
      /*if no react just return LI element*/
  		:<li key={index} className={styles.item}>{elem.name}</li>
  	)}
  </ul>
  return(
    listGenerator(bar)
  )
}


var Logo = (props) => (
  <div className={styles.logo}>
    <img src={props.img}/>
  </div>
)

export class Navigation extends React.Component {
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
    }, this.animation)
  }
  handleResize() {
    /*Reset css classes in mobilemenu*/
    (window.innerWidth > 1024) && this.setState({collapsed: 1.1})
  }
  animation() {
    console.log('collapsed state:: ', this.state.collapsed)
  }
  render() {
    return (
      <div className={styles.navigation}>
        <div className={styles.content}>
          <Logo img={img}/>
          <div className={styles.bar}>
            <Items/>
            <Hamburger change={this.changeState} collapsed={this.state.collapsed}/>

          </div>

        </div>
        <Mobilemenu show={this.state.collapsed}/>
      </div>
    )
  }
}
