import './App.css';
import AboutMeTransition from './Components/AboutMeTransition/AboutMeTransition';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MobileNav from './Containers/MobileNav/MobileNav';
import MainNav from './Containers/MainNav/MainNav';
import AboutPage from './Containers/AboutPage/AboutPage';
import ProjectsPage from './Containers/ProjectsPage/ProjectsPage';
import ContactPage from './Containers/ContactPage/ContactPage';
import TechnicalPage from './Containers/TechnicalPage/TechnicalPage';
import ProjectPage from './Containers/ProjectPage/ProjectPage';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <div className="App">
          <Switch>
            <Route path="/about" component={AboutPage} />
            <Route path="/projects" component={ProjectsPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/skills" component={TechnicalPage} />
            <Route path="/project/:id" component={ProjectPage} />
          </Switch>
          <Switch>
            <Route exact path="/">
              <div className="landingPage container">
                <AboutMeTransition />
              </div>
            </Route>
            <Route path="/">
              <Footer />
            </Route>
          </Switch>
          <MobileNav />
          <MainNav />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
