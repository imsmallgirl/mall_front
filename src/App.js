import './App.css';
import { useCallback, useEffect } from 'react';
import Home from './pages/Home';
import { useState } from 'react';
import { getProducts } from './data';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Detail from './pages/Detail';


function App() {
  const handleScroll = useCallback(() => {
  })

  useEffect(() => {
    document.getElementById('root')?.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, {capture : true});
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const [product, setProduct] = useState([]);
  
  useEffect(() => {
    getProducts().then((data) => setProduct(data.data.products))
  }, [setProduct])
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home product={product}/>} />
          <Route path='/detail/:id' element={<Detail product={product} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
