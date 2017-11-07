import React from 'react';
import ReactDOM from 'react-dom';
import CSSModules from 'react-css-modules';
import Results from '../../components/results/results.jsx';
import Iconbox from '../../components/iconbox/iconbox.jsx';
import Diagram from '../../components/diagram/diagram.jsx'
import Themes from '../../components/themes/themes.jsx';
import WeAre from '../../components/weare/weare.jsx';
import SkewSection from '../../components/global/SkewSection/SkewSection.jsx';
import Skew from '../../components/global/Skew/skew.jsx';
import Testimonial from '../../components/testimonial/testimonial.jsx';
import Gallery from '../../components/gallery/gallery.jsx';
import Blog from '../../components/blog/blog.jsx';
console.log('blog',Blog)
import Separator from '../../components/separator/separator.jsx';

var separators = [
  {
    theme: 'white',
    title: 'We Love What We Do',
    sub: 'Do what it takes to make it right! Work we have done.'
  }, {
    theme: 'white',
    title: 'From Our Blog',
    sub: 'Offering feature rich, professional product.'
  }
]

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <SkewSection>
          <Iconbox/>
          <Themes/>
        </SkewSection>
        <SkewSection>
          <Results/>
        </SkewSection>
        <SkewSection>
          <Diagram/>
        </SkewSection>
        <SkewSection>
          <WeAre/>
        </SkewSection>
        <SkewSection>
          <Testimonial/>
        </SkewSection>
        <Separator config={separators[0]} id={1}/>
        <SkewSection>
          <Gallery/>
        </SkewSection>
        <Separator config={separators[1]} id={2}/>
        <SkewSection>
          <Blog/>
        </SkewSection>

      </div>
    )
  }
}
