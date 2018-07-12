import React, { Component } from 'react';
import '../scss/App.scss';
import Nav from './Nav';
import About from './About';
import Scroll from './Scroll';
import CV from './CV';
import ProjectWrapper from './ProjectWrapper';
import Projects, {ProjectProps} from './Projects';
import Contact from './Contact';
import Footer  from './Footer';

class App extends Component {
  render() {
    return (
      <div className="Wrapper">
          <Nav />
          <Scroll>
            <About />
            <CV />
            <ProjectWrapper>
            {/* Map through  */}
              {ProjectProps.map((props, i) => <Projects key={i} {...props} />)}
            </ProjectWrapper>
            <Contact />
            <Footer />
          </Scroll>
      </div>
    );
  }
}

export default App;
