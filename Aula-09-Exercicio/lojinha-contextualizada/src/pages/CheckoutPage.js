import { useNavigate } from "react-router-dom"
import { useContext } from "react";

import CartContext from "../contexts/CartContext";

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { cart } = useContext(CartContext)

  function getOrderTotalprice(){
    return cart.reduce((total, current) => {
      return total += current.price;
    }, 0)
  }



  return (
    <div className="CheckoutPage">
      <h1>Produtos Selecionados</h1>
      {cart.map( (product, key) => {
        return(
          <div>
            {key+1}. {product.icon} {product.name} - R$ {product.price.toFixed(2)}
          </div>
        )
      })}
      <div className="register">
        <b>Total da compra:</b> R$ <span>{Number(getOrderTotalprice()).toFixed(2)}</span>
      </div>
      <button onClick={() => navigate("/")}>Voltar</button>
    </div>


  )
}