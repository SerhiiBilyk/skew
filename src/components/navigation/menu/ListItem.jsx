import React from 'react';
import ReactDOM from 'react-dom';
import CSSModules from 'react-css-modules';
import styles from './menuItems.scss';
import Link from '../../global/link/link.jsx';

class ListItem extends React.Component{
  constructor(props){
    super(props)
    this.state={
      deep:this.props.deep,
      show:0
    }
  }
  increment(e){
     e.stopPropagation();
    this.setState({
      show:this.state.show ^ 1
    })
  }
  render(){


const marker='marker';
/*
show<-->hide css logic
 */
var cssShow=this.state.show?'show':'hide';
var container = this.props.container?'container '+cssShow:'';
var css=container+' item';

    return(
      <li styleName={css} deep={this.props.deep} state={this.state.show} onClick={(e)=>this.increment(e)} >
          <Link content={this.props.name} to='/home'/>
          {this.props.content}
      </li>
    )
  }
}
export default CSSModules(ListItem,styles, {allowMultiple: true})
