import { useNavigate } from "react-router-dom";

import Product from "../components/Product";

const products = [
  { name: "Bolo de aniversário", icon: "🎂", price: 20.9, id: 1 },
  { name: "Balão", icon: "🎈", price: 5.6, id: 2 },
  { name: "Confete", icon: "🎉", price: 2.9, id: 3 },
  { name: "Suco de caixinha", icon: "🧃", price: 1.9, id: 4 },
  { name: "Doces diversos", icon: "🍬", price: 12.3, id: 5 }
];

export default function ProductsPage() {
  const navigate = useNavigate();
  return (
    <div className="ProductsPage">
      <h1>Produtos disponíveis</h1>
      <p>Por questões de estoque, as compras estão limitadas a uma unidade por cpf.</p>
      {
        products.map(product => {
          return (


            <Product
              key={product.name}
              name={product.name}
              icon={product.icon}
              price={product.price}
              id={product.id}
              />
            
          )
        })
      }
      <button onClick={() => navigate("/checkout")}>Fechar compra</button>
    </div>
  )
}