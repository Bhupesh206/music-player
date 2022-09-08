import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Menu from './components/Menu';
import Music from './components/Music';
import Pnf from './components/Pnf';
import Tracks from './components/Tracks';



function App() {
  return (
    <Router>
      <Menu/>
      <Routes>
        <Route path= {`/`} element= {<Music/>}/>
        <Route path= {`/music`} element= {<Music/>}/>
        <Route path= {`/tracks/:id`} element= {<Tracks/>}/>
        <Route path= {`/*`} element= {<Pnf/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;
