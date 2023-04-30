import './App.css';
import Footer from './footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart';
import { Top1 } from './components/top1';
import { Top2 } from './components/top2';
import { Top3 } from './components/top3';
import { Top4 } from './components/top4';
import { Top5 } from './components/top5';
import { Top6 } from './components/top6';
import { Top7 } from './components/top7';
import { Top8 } from './components/top8';
import { ShopContextProvider } from './context/shop-context';


function App() {
  

 
  return (
  <div className="App">
  <ShopContextProvider>
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element=<Shop /> />
      <Route path="/cart" element=<Cart /> />
      <Route path="/top1" element=<Top1 /> />
      <Route path="/top2" element=<Top2 /> />
      <Route path="/top3" element=<Top3 /> />
      <Route path="/top4" element=<Top4 /> />
      <Route path="/top5" element=<Top5 /> />
      <Route path="/top6" element=<Top6 /> />
      <Route path="/top7" element=<Top7 /> />
      <Route path="/top8" element=<Top8 /> />

    </Routes>
  </Router>
  </ShopContextProvider>
  
  
  
<Footer />
</div>
  
  );
 
  };


export default App;
