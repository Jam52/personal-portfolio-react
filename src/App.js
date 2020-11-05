import './App.css';
import LandingPage from './Components/LandingPage/LandingPage';
import { BrowserRouter } from 'react-router-dom';
import MobileNav from './Containers/MobileNav/MobileNav';
import MainNav from './Containers/MainNav/MainNav';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <LandingPage/>
        <MobileNav/>
        <MainNav/>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
