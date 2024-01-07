import{Routes, Route} from 'react-router-dom'

// components
// import FaqComponents from './components/FaqComponents';
// import FooterComponents from './components/FooterComponents';
import NavbarComponent from './components/NavbarComponent';
// pages
import HomePage from './pages/HomePage'
import TemaPage from './pages/TemaPage';
import TestiPage from './pages/TestiPage';
import FaqPage from './pages/FaqPage';
import SnKPage from './pages/SnKPage';



function App() {
  return(
    <div>
      <NavbarComponent />

      <Routes>
        <Route path='/' Component={HomePage} />
        <Route path='/Tema' Component={TemaPage} />
        <Route path='/Testimonial' Component={TestiPage} />
        <Route path='/FAQ' Component={FaqPage} />
        <Route path='/SNK' Component={SnKPage} />
    </Routes>

    {/* <FooterComponents /> */}
    </div>
    
  );
  
}

export default App
