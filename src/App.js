import { Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './Component/Banner/Banner';
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
        <Route path='/banner' element={<Banner></Banner>}></Route>
        <Route path='/footer' element={<Footer></Footer>}></Route>
        <Route path='/footer' element={<Footer></Footer>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/services/:id' element={<ServicesDetails></ServicesDetails>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>


        

      </Routes>
    </div>
  );
}

export default App;
