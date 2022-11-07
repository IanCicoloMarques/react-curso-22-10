import { useContext } from "react";

import CartContext from "../contexts/CartContext";

export default function Product(props) {
  //DISPLAY
  const { name, icon, price } = props;
  const adjustedPrice = price.toFixed(2).toString().replace(".", ",");

  //CONTEXT
  const { cart, setCart } = useContext(CartContext);


  function addProductOnCart() {
    if (isProductAlreadySelected()) {
      const newProductList = removeProductFromCart();
      setCart(newProductList);
    } else {
      setCart([...cart, props]);
    }
  }

  function removeProductFromCart() {
    return cart.filter(productOnCart => props.id !== productOnCart.id);
  }

  function isProductAlreadySelected() {
    return cart.find(productOnCart => props.id === productOnCart.id);
  }

  function checkSelected() {
    let classes = "product";
    if (isProductAlreadySelected()) {
      classes = "product selected";
    }
    return classes;
  }

  return (
    <div className={checkSelected()} onClick={addProductOnCart}>
    {icon} {name} - R$ {adjustedPrice}
    </div>
  );
}