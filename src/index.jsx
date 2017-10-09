import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import {Header} from './components/header/header.jsx';
import {HashRouter as Router,Route,Link,Switch} from 'react-router-dom';

function root(nodeID) {
  const element = document.createElement('div');
  element.id = nodeID;
  document.body.appendChild(element);
  return element;

};
/**
 * Router prototype
 */
function Home(props){
  return(
    <div>
      <h1>Home</h1>
    </div>
  )
}
function Other(props){
  return(
    <div>
      <h1>Other</h1>
    </div>
  )
}
/*End router prototype*/
var element = root('root');
const Main = () => (
  <main>
    <Switch>
      <Route  path='/home' component={Home}/>
        <Route  path='/other' component={Other}/>
    </Switch>
  </main>
)
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header/>
        <Main/>
      </div>
    )
  }
}

ReactDOM.render((
  <Router>
    <App/>
  </Router>
), element);
