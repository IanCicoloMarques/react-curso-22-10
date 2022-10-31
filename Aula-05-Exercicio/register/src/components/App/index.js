import Register from "../Register";
import Product from "../Product";
import { useState } from "react";
 

const products = [
  { name: "Bolo de aniversário", icon: "🎂", price: 20.9 },
  { name: "Balão", icon: "🎈", price: 5.6 },
  { name: "Confete", icon: "🎉", price: 2.9 },
  { name: "Suco de caixinha", icon: "🧃", price: 1.9 },
  { name: "Doces diversos", icon: "🍬", price: 12.3 }
];

export default function App() {

  const [totalPrice, setTotalPrice] = useState(0);

  function updatePrice(priceChange){
    setTotalPrice(totalPrice + priceChange)
  }

  const adjustedPrice = totalPrice.toFixed(2).toString().replace(".", ",");
 
  return (
    <>
      <Register 
        totalPrice = {adjustedPrice}
      />
      <div>
        {products.map((product) => {
          const { name, icon, price } = product;
          return (
            <Product
              name={name}
              icon={icon}
              price={price}
              updatePrice = {updatePrice}
            />
          )
        })}
      </div>
    </>
  );
}

