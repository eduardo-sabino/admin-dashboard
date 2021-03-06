import React, { useState } from 'react'
import Topbar from './components/topbar/Topbar'
import Sidebar from './components/sidebar/Sidebar'
import './app.css'
import Home from './pages/home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';

export const MenuContext = React.createContext()

export default function App() {
  const [isMenuDisplayed, setIsMenuDisplayed] = useState(false)

  function toggleMenuDisplay() {
    console.log(isMenuDisplayed);
    setIsMenuDisplayed(prevIsMenuDisplayed => !prevIsMenuDisplayed)
  }

  return (
    <Router>
      <MenuContext.Provider value={isMenuDisplayed}>
        <Topbar toggleMenuDisplay={toggleMenuDisplay}/>
        <div className='container'>
          <Sidebar toggleMenuDisplay={toggleMenuDisplay}/>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/users">
              <UserList />
            </Route>
            <Route path="/user/:userId">
              <User />
            </Route>
            <Route path="/newUser">
              <NewUser />
            </Route>
            <Route path="/products">
              <ProductList />
            </Route>
            <Route path="/product/:productId">
              <Product />
            </Route>
            <Route path="/newProduct">
              <NewProduct />
            </Route>
          </Switch>

        </div>
      </MenuContext.Provider>
    </Router>
  );
}