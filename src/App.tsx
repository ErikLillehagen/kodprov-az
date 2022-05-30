import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Details from "./pages/Details/Details";
import Landing from "./pages/Landing/Landing";

function App() {
return (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/show/:id" element={<Details />} />
        {/*<Route path="*" component={NoMatch} />*/}
      </Routes>
    </BrowserRouter>
  </div>
)
}

export default App;
