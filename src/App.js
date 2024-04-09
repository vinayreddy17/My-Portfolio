
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Head from './components/Head';
import Contact from './components/Contact';
import Projects from './components/Projects';


function App() {
  return (
    <div className="App">
   <Navbar />
   <Head />
   <About />
   <Projects />
   
   <Contact />
   <Footer />
   
 
    </div>
  );
}

export default App;
