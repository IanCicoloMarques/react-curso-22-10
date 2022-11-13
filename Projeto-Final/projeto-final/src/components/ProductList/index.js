import { Grid } from "@mui/material";
import Product from "../Product";
import { useContext, useEffect, useState } from "react";
import ProductsContext from "../../contexts/productsContext";


export default function ProductList(props){
    const { priceFilter } = props;
    const { products } = useContext(ProductsContext);
    const [ filtered, setFiltered ] = useState([]);

    useEffect(() => {
      setFiltered([...products])
    },[products])

    useEffect(() => {
      let aux = [...products];
      if(priceFilter.Toggle){
        if(priceFilter.minValue){
          aux = aux.filter(item => item.price >= priceFilter.minValue);
        }
        if(priceFilter.maxValue){
          aux = aux.filter(item => item.price <= priceFilter.maxValue);

        }
      }
      setFiltered([...aux]);
      console.log(filtered)
    }, [priceFilter])
    
    return(
      <div>
        <h1><b>Products:</b> {filtered.length}</h1>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {filtered.map((product, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <Product
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                        selectedImage={product.selectedImage}
                        />
             </Grid>
            ))}
        </Grid>
      </div>
    )
};