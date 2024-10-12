
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Acceuil from './Acceuil';
import Details from './Details';
import Panier from './Panier';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Link to={"/"} className='btn btn-primary'>Acceuil</Link>
      <Link to={"/details"} className='btn btn-primary'>Details</Link>
      <Link to={"/panier"} className='btn btn-primary'>Panier</Link>
      <Routes>
     <Route path='/' element={<Acceuil/>}></Route>
     <Route path='/details' element={<Details/>}></Route>
     <Route path='/panier' element={<Panier/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
