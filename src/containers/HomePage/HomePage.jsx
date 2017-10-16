import React from 'react';
import ReactDOM from 'react-dom';
import Iconbox from '../../components/iconbox/iconbox.jsx';
import Themes from '../../components/themes/themes.jsx';
import CSSModules from 'react-css-modules';


 export default class HomePage extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <Iconbox />
        <Themes />
      </div>
    )
  }
}
