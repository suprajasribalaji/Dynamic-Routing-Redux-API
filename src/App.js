import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/home';
import Endpoint from './components/endpoint';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home />} />;
        <Route path="/:name" element={<Endpoint />} />;
      </Routes>
    </Router>
  );
}

export default App;
