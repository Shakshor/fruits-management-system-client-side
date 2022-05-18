import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import Blog from './Pages/Blog/Blog';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Inventory from './Pages/Inventory/Inventory';
import ItemDetails from './Pages/ItemDetails/ItemDetails';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        {/* <Route path='home/inventoryItem/:itemId' element={<ItemDetails></ItemDetails>}></Route> */}
        <Route path='/inventory/inventoryItem/:itemId' element={
          <RequireAuth>
            <ItemDetails></ItemDetails>
          </RequireAuth>}>
        </Route>
        <Route path='/inventoryItem/:itemId' element={
          <RequireAuth>
            <ItemDetails></ItemDetails>
          </RequireAuth>}>

        </Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
