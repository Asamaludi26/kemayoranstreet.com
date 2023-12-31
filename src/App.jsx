import{Routes, Route} from 'react-router-dom'

// components
// import FaqComponents from './components/FaqComponents';
import FooterComponents from './components/FooterComponents';
import NavbarComponent from './components/NavbarComponent';
// pages
import HomePage from './pages/HomePage'
import KelasPage from './pages/KelasPage';
import TestiPage from './pages/TestiPage';
import FaqPage from './pages/FaqPage';
import SnKPage from './pages/SnKPage';



function App() {
  return(
    <div>
      <NavbarComponent />

      <Routes>
        <Route path='/' Component={HomePage} />
        <Route path='/Kelas' Component={KelasPage} />
        <Route path='/Testimoni' Component={TestiPage} />
        <Route path='/FAQ' Component={FaqPage} />
        <Route path='/S&K' Component={SnKPage} />
        {/* <Route path='/' Component={KelasPage} /> */}
    </Routes>

    <FooterComponents />
    </div>
    
  );
  
}

export default App
