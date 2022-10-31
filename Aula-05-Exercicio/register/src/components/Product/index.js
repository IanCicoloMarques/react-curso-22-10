import './Product.css'
import {useState} from "react";

function Product(props) {
    const { name, icon, price, updatePrice } = props;
    const adjustedPrice = price.toFixed(2).toString().replace(".", ",");
    const [isSelected, setIsSelected] = useState(false);
 
    function Selector(){
        setIsSelected(!isSelected);
        if(!isSelected) updatePrice(price);
        else updatePrice(price * (-1));
    }

    function checkSelected() {
        let classes = "Product";
        if (isSelected) {
          classes = "Product Selected";
        }
        return classes;
      }

    return (
      <div className={checkSelected()} onClick={Selector}>
        {icon} {name} - R$ {adjustedPrice}
      </div>
    );
  }

export default Product