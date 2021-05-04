import './App.css';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className="App">
      <div className="appHeader">
        <Header/>
      </div>
      <div className="appHero">
        <HeroSection/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

