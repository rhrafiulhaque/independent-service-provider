import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Banner from './Component/Banner/Banner';
import Blog from './Component/Blog/Blog';
import CheckOut from './Component/CheckOut/CheckOut';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import NotFound from './Component/NotFound/NotFound';
import Register from './Component/Register/Register';
import Services from './Component/Services/Services';
import ServicesDetails from './Component/ServicesDetails/ServicesDetails';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/banner' element={<Banner></Banner>}></Route>
        <Route path='/footer' element={<Footer></Footer>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/checkout' element={<CheckOut></CheckOut>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/services/:id' element={<ServicesDetails></ServicesDetails>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>     

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
