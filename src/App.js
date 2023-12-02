import './App.css';
import Header from './component/Header.js';
import Case from './component/Case/Case.js';
import Respect from './component/Respect/Respect.js';
import Poster from './component/Poster/Poster.js';
import Main from './component/Main.js';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/case" element={<Case/>}></Route>
          <Route path="/protect" element={<Respect/>}></Route>
          <Route path="/poster" element={<Poster/>}></Route>
          <Route path="/" element={<Main/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
