import React from 'react';
import ReactDOM from 'react-dom';
import CSSModules from 'react-css-modules';
import Results from '../../components/results/results.jsx';
import Iconbox from '../../components/iconbox/iconbox.jsx';
import Themes from '../../components/themes/themes.jsx';
import SkewSection from '../../components/global/SkewSection/SkewSection.jsx';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Iconbox/>
        <Themes/>
        <SkewSection>
          <Results/>
        </SkewSection>
      </div>
    )
  }
}
