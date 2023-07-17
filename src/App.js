import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header/Header';
import HomePage from './Pages/HomePage/HomePage';
import AboutUs from './Pages/AboutUs/AboutUs';
import ContactUs from './Pages/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import MyCart from './Pages/MyCart/MyCart';
import Offers from './Pages/Offers/Offers';
import LoginPage from './Pages/LoginPage/LoginPage';


function App() {
  return (
    <BrowserRouter>
    <div>    
      <Header/>
      <main className = "container mt-5 pt-3"> 

      <Routes>
        <Route path = '/' element = {<HomePage/>} ></Route>
        <Route path = '/about-us' element = {<AboutUs/>} ></Route>
        <Route path = '/contact-us' element = {<ContactUs/>} ></Route>
        <Route path = '/login-page' element = {<LoginPage/>}></Route>
        <Route path = '/my-cart' element = {<MyCart/>}></Route>
        <Route path = '/my-offers' element = {<Offers/>}></Route>
      </Routes>
      </main>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
