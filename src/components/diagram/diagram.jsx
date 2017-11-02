import React from 'react';
import ReactDOM from 'react-dom';
import CSSModules from 'react-css-modules';
import styles from './diagram.scss';
import Title from '../global/Title/Title.jsx';
import Wrapper from '../global/Wrapper/wrapper.jsx';

const percentage = [66, 82, 41];
/*
TODO
write scroll logic, because css animation should start when user scroll to circle diagrams
 */
var TitleConfig = {
  title: 'Why Us? We Care About Our Clients and Make Their Life Easier!',
  sub: 'We listen, we discuss, we advise and develop. We are flexible, transparent and customer-focused.'
}
var CircleDiagramsConfig = [
  {
    name: 'WordPress',
    percentage: 66,
    text: 'Nulla consectetur ornare nibh, a auctor mauris scelerisque eu proin nec urna quis.'
  }, {
    name: 'HTML5',
    percentage: 82,
    text: 'Nulla consectetur ornare nibh, a auctor mauris scelerisque eu proin nec urna quis.'
  }, {
    name: 'CSS3',
    percentage: 41,
    text: 'Nulla consectetur ornare nibh, a auctor mauris scelerisque eu proin nec urna quis.'
  }
]

class Diagram extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var circles = CircleDiagramsConfig.map(function(elem, index) {
      return (
        <div key={index} styleName='circle' >
          <div styleName='container' per={`${elem.percentage}%`}>
            <div styleName={`pie item-${index + 1}`}></div>
          </div>
          <div>
            <p styleName='name'>{elem.name}</p>
            <p styleName='text'>{elem.text}</p>
          </div>
        </div>
      )
    })
    return (
      <Wrapper>

        <div styleName='diagram'>
          <Title theme='dark' {...TitleConfig}/> {circles}
        </div>
      </Wrapper>
    )
  }
}

export default CSSModules(Diagram, styles, {allowMultiple: true});
