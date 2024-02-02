
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Routes, Route } from "react-router-dom";
import About from './Page/About';
import Homes from './Page/Homes';
import Header from './component/globalComponent/Header';
import Footer from './component/globalComponent/Footer';
import Servicess from './Page/Servicess';
import Pages from './Page/Pages';
import Contact from './Page/Contact';
function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={ <Homes/>} />
        <Route path="/about" element={ <About/> } />
        <Route path="/services" element={ <Servicess/> } />
        <Route path="/pages" element={ <Pages/> } />
        <Route path="/Contact" element={ <Contact/> } />
      </Routes>
    <Footer/>
    </>
  );


}

export default App;
