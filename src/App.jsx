import { useContext, useState } from 'react';
import './App.css';
import { DataLoad } from './Duomenys/Dataload';
import { Footer } from './Komponentai/Footer';
import { NotFound } from './Pages/NotFound';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Navbaras } from './Komponentai/Navbar';
import { NewBook } from './Pages/NewBook';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbaras></Navbaras>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/newbook" element={<NewBook/>} />
        <Route path="/reviews" element={<DataLoad />} />
      </Routes>

      <Footer></Footer>
    </>
  );
}

export default App;
