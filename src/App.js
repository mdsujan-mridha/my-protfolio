import './App.css';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Hero/Home';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';


const App =() => {
  return <>
    <Header/>
    <Home/>
    <Features/>
    <Portfolio/>
    <Resume/>
    <Blog/>
    <Contact/>
    <Footer/>
   
  </> 
 
    

}

export default App;
