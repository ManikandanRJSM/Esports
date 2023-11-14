import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import Home from './Components/Home'
import Organiser from './Components/Organiser'
import Player from './Components/Player'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path = "/" element = {<Home />}></Route>
          <Route path = "/organiser" element = {<Organiser />}></Route>
          <Route path = "/player" element = {<Player />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
