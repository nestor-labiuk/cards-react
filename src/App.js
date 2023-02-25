import {Routes, Route} from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import Login from './pages/Login/Login';
import AboutUs from './pages/About-us/About-us';

function App() {

 


  return (
    <>
      <Header >
      </Header>
     
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/product/:id' element={<Product/>}/> 
        <Route path='/login' element={<Login/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>

      </Routes>

      <Footer>
      </Footer>

    </>
  );
}

export default App;
