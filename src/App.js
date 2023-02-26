import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import DescriptionProduct from './pages/Description-product/Description-product';
import Login from './pages/Login/Login';
import AboutUs from './pages/About-us/About-us';
import Products from './pages/Products/Products';

function App() {

  return (
    <>
      <Header >
      </Header>
      <div className="main">
        <Routes >
          <Route exact path='/' element={<Home />} />
          <Route path='/description-product/:id' element={<DescriptionProduct />} />
          <Route path='/products' element={<Products />} />
          <Route path='/login' element={<Login />} />
          <Route path='/aboutus' element={<AboutUs />} />
        </Routes>
      </div>
      <Footer>
      </Footer>

    </>
  );
}

export default App;
