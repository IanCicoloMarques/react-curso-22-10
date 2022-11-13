import { Button } from "@mui/material";
import { useContext } from "react";

import CartContext from "../../../contexts/cartContext";
import UserContext from '../../../contexts/userContext';

import ConfirmComponent from "./ConfirmComponent";

export default function CheckOutPage (){
    const { cart } = useContext(CartContext)
    const { userLogin } = useContext(UserContext)

    function getOrderTotalprice(){
        return cart.reduce((total, current) => {
          return total += current.price * current.amount;
        }, 0)
      }

    function checkLogin(){
        let result = "";
        userLogin?
        (result = (
        <ConfirmComponent
            address={userLogin.address}
            addressInfo={userLogin.addressInfo}
        />))
        :
        (result=(
        <div>Please, login to continue.</div>    
        ))
        

        return result;
    }

    return(
        <div className="CheckoutPage">
            <h1>Produtos Selecionados</h1>
            {cart.map( (product, key) => {
                return(
                    <div>
                    <div>
                        <b>Produto:</b> {product.name} <b>Preço:</b> {product.price.toFixed(2)} <b>Quantidade:</b> {product.amount}
                    </div>
                </div>
                )})}
            <div>
                <b>Total:</b> {Number(getOrderTotalprice()).toFixed(2)}
                {checkLogin()}
            </div>
            <Button
              type="submit"
              variant="contained"
              disabled={ !userLogin }
            >
              Confirm
          </Button>
        </div>
    )
};