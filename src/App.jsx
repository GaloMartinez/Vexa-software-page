import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../src/components/Navbar/Navbar'
import MainBanner from '../src/components/MainBanner/MainBanner'
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import Technologies from './components/Technologies/Technologies';
import Hiring from './components/Hiring/Hiring';
import Footer from './components/Footer/Footer';
import ContactForm from './components/ContactForm/ContactForm';
function App() {

  return (
    <div>
      <Navbar />
    <div id="main-banner"><MainBanner /></div>
    <div id="services"><Services /></div>
    <div id="projects"><Projects /></div>
    <div id="technologies"><Technologies /></div>
    <div id="hiring"><Hiring /></div>
    <div id="contact"><ContactForm /></div>
    </div>
  )
}

export default App
