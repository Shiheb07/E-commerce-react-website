
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import { Routes,Route } from 'react-router-dom';
import Shop from './pages/Shop';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Signup from './pages/Signup';
import NotFound from './pages/NotFound';
import LogIn from './pages/LogIn';
import ShopDetail from './pages/ShopDetail';




function App() {
  return (
    <div className="App">

   
      <Header />
      <Routes>
     <Route path='/' element={ <Home />} />
     <Route path='/shop' element={<Shop />} />
     <Route path='/blogs' element={<Blogs />} />
     <Route path='/contact' element={<Contact />} />
     <Route path='/cart' element={<Cart />} />
     <Route path='/signup' element={<Signup />} />
     <Route path='/login' element={<LogIn />} />
     <Route path='/*' element={<NotFound />} />
     <Route path='/shop-detail/:id' element={<ShopDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
