import './App.css';
import Bottom from './Bottom';
import HeroSection from './Hero';
import Work from './Work';


function App() {
  return (
    <div className="App">
      <header className="App-header bg-stone-400">
        <HeroSection className='z-0'/>
        <div className='w-full bg-stone-800 z-10 mt-32'>
          <Work />
        </div>

      </header>
      <Bottom></Bottom>
    </div>
  );
}


export default App;
