import './App.css';
import AboutMeTransition from './Components/AboutMeTransition/AboutMeTransition';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MobileNav from './Containers/MobileNav/MobileNav';
import MainNav from './Containers/MainNav/MainNav';
import AboutPage from './Containers/AboutPage/AboutPage';
import ProjectsPage from './Containers/ProjectsPage/ProjectsPage';

function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <div className="App">
          <Switch>
          <Route path='/about' component={AboutPage}/>
          <Route path="/projects" component={ProjectsPage}/>
            <Route path='/'>
            <div className='landingPage'>
                <AboutMeTransition/>
              </div>
            </Route>
            
            
          </Switch>
        
          <MobileNav/>
          <MainNav/>
        </div>  
        
      </div>
    </BrowserRouter>
    
  );
}

export default App;
