import React, { Component } from 'react';
import '../scss/App.scss';
import Nav from './Nav';
import About from './About';
import Wrapper from './Wrapper';
import CV from './CV';
import ProjectWrapper from './ProjectWrapper';
import Projects, {ProjectProps} from './Projects';
import Contact from './Contact';
import Footer  from './Footer';

class App extends Component {
  render() {
    return (
      <div>
          <Nav />
          <Wrapper>
            <About />
            <CV />
            <ProjectWrapper>
            {/* Map through  */}
              {ProjectProps.map((props, i) => <Projects key={i} {...props} />)}
            </ProjectWrapper>
            <Contact />
            <Footer />
          </Wrapper>
      </div>
    );
  }
}

export default App;
