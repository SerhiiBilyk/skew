import React from 'react';
import ReactDOM from 'react-dom';
import CSSModules from 'react-css-modules';
import styles from './menuItems.scss';
import Link from '../../global/link/link.jsx';
import Arrow from './Arrow.jsx';


class ListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: 1.1
    }

  }
  /*
  method is invoked before a mounted component receives new props
  ...onResize this component receives every time other props from Navigation component,
  if windowInnerWidth is >1024, it receives collapsed 1.1.
  1.1. is the initial state(reset)
   */
  componentWillReceiveProps(nextProps) {
    nextProps.collapsed === 1.1&& this.setState({show: this.props.collapsed})
  }
  increment(e) {
    console.log('state', this.state.show)
    e.stopPropagation();
    this.setState({
      show: this.state.show ^ 1
    })
  }
  render() {

    const marker = 'marker';
    /*
show<-->hide css logic
 */
    var display = (show) => show > 1
      ? ''
      : !show
        ? 'show'
        : 'hide';
    var container = this.props.container
      ? 'container ' + display(this.state.show)
      : '';
      var fa;
      if(container){
        fa=<Arrow direction={this.state.show} />
      }
    var css = container + ' item';
    return (
      <li styleName={css} deep={this.props.deep} state={this.state.show} onClick={(e) => this.increment(e)}>
            {fa}
        <Link content={this.props.name} to='/home'/> {this.props.content}
      </li>
    )
  }
}
export default CSSModules(ListItem, styles, {allowMultiple: true})
