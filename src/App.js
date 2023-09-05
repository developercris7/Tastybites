import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './Homepage/home';
import Intro from './IntroPage/Intro'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Intro  />} />
        <Route path="/home" element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
