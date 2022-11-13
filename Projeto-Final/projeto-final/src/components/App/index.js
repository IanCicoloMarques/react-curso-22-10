//HOOKS
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import axios from "axios";

// COMPONENTS
import NavBar from "../NavBar";
import CheckOutPage from "../pages/CheckOutPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import ShopPage from "../pages/ShopPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

import './App.css';

// CONTEXTS
import ProductsContext from "../../contexts/productsContext";
import CartContext from "../../contexts/cartContext";
import UserContext from "../../contexts/userContext";


function App() {

  const [ products, setProducts ] = useState([]);
  const [ cart, setCart ] = useState([]);
  const [ userLogin, setUserLogin ] = useState(null);
  
  useEffect(() => {
    const request = axios.get(`${process.env.REACT_APP_BACKEND_URI}/products`);
    request.then((response) => {
      setProducts(response.data);
    })
  }, [])


  function addProductToCart(item){
    item.amount = 1;
    setCart([...cart, item]);
  };

  function removeProductFromCart(id){
    const auxCart = cart.filter(cart => id != cart.id);
    setCart(auxCart);
  };

  function updateProductOnCart(id, value){
    const auxCart = [...cart];
    
    const index = auxCart.findIndex(item => item.id == id);
    auxCart[index].amount = value;

    setCart([...auxCart]);
  };


  return (
    <div className="App">
      <UserContext.Provider value={ { userLogin, setUserLogin} }>
        <ProductsContext.Provider value={ {products, setProducts} }>
          <CartContext.Provider value={ {cart, setCart, addProductToCart, removeProductFromCart, updateProductOnCart} }>
            <BrowserRouter>
              <NavBar/>
              <Routes>
                <Route path="/" element={ <ShopPage />} />
                <Route path="/detail/:id" element={ <ProductDetailPage/>} />
                <Route path="/checkout" element={ <CheckOutPage/> } />
                <Route path="/login" element={ <LoginPage/> } />
                <Route path="/register" element={ <RegisterPage/> } />
              </Routes>
            </BrowserRouter>
          </CartContext.Provider>
        </ProductsContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
