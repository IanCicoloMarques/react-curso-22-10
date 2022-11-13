import { useContext, useState } from "react"
import { useParams } from "react-router-dom";

import ProductsContext from "../../../contexts/productsContext"
import CartContext from "../../../contexts/cartContext"

import { Button } from "@mui/material";

export default function ProductDetailPage (){
    const params = useParams();
    
    const { products } = useContext(ProductsContext);
    const { cart, setCart, addProductToCart, removeProductFromCart, updateProductOnCart } = useContext(CartContext);
    
    const [ counter, setCounter ] = useState(initialCounter);
    
    
    const item = products.find(x => x.id == params.id);

    function initialCounter(){
        let result = 0;
        const cartItem = cart.find(x => x.id == params.id); 
        cartItem?
        result = cartItem.amount
        : result = 0;
        return result;
    }

    

      function handleProductAdd(){
        if (counter == 0){
            setCounter(counter+1);
            addProductToCart({...item});
        }
        else{
            updateProductOnCart(params.id, counter+1);
            setCounter(counter+1);
        }
      }

      function handleProductSubtract(){
        if (counter == 1){
            removeProductFromCart(params.id);
            setCounter(0);
        }
        else if(counter > 1)
        {
            updateProductOnCart(params.id, counter-1);
            setCounter(counter-1);
        }
      }

      function selectImage(){
        if(counter == 0){
            return item.image;
        }
        else{
            return item.selectedImage;
        }
      }

    return(
        <div>
            <div>Name: {item.name}</div>
            <div>Gen: {item.gen}</div>
            <div>Price: {item.price}</div>
            <div>
            <img src={selectImage()}/>   
            </div>
            <Button onClick={handleProductSubtract}>-</Button>
            {counter}
            <Button onClick={handleProductAdd}>+</Button>
        </div>
    )
};