import React from 'react';
import ReactDOM from 'react-dom';
import styles from './navigation.scss';
import img from './img/logo.png';
import {Hamburger} from './hamburger.jsx';
import {Mobilemenu} from './mobilemenu/Mobilemenu.jsx';
import {bar} from './bar.jsx';


class Items extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var items = bar.map(function(elem, index) {
      return <li key={index} className={styles.item}>{elem.name}</li>
    })
    return (
      <ul className={styles.items}>
        {items}
      </ul>
    )
  }
}

var Logo = (props) => (
  <div className={styles.logo}>
    <img src={props.img}/>
  </div>
)
class CreateContact extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            windowHeight: window.innerHeight,
            windowWidth: window.innerWidth
        };
        this.handleResize=this.handleResize.bind(this)
    }

    handleResize(e) {
        this.setState({
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth
        });
        console.log('resize')
    }

    componentDidMount() {
        window.addEventListener('resize',this.handleResize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
    }

    render() {

        return (
            <span className='test'>
                {this.state.windowWidth} x {this.state.windowHeight}
            </span>
        );
    }
}
export class Navigation extends React.Component {
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
      <div className={styles.navigation}>
        <div className={styles.content}>
          <Logo img={img}/>
          <div className={styles.bar}>
            <Items/>
            <Hamburger
              change={this.changeState}
              collapsed={this.state.collapsed}
            />

          </div>

        </div>
        <Mobilemenu show={this.state.collapsed} />
          <CreateContact/>
      </div>
    )
  }
}
