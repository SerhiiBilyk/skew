import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router,Route,Link,Switch} from 'react-router-dom';
import HomePage from './containers/HomePage/HomePage.jsx';

/**
 * Router prototype
 */

function Other(props){
  return(
    <div>
      <h1>Other</h1>
    </div>
  )
}
/*End router prototype*/

export  const Main = () => (
  <main>
    <Switch>
      <Route  path='/' component={HomePage}/>
      <Route  path='/other' component={Other}/>
    </Switch>
  </main>
)
export default Main;
