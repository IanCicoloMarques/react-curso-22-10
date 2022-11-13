import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Input, InputLabel, InputAdornment } from "@mui/material";

import ProductsContext from "../../../contexts/productsContext";
import CartContext from "../../../contexts/cartContext";
import ProductList from "../../ProductList";

export default function ShopPage (){
    const { products } = useContext(ProductsContext);
    const { cart } = useContext(CartContext);
    const [ priceFilter, setPriceFilter ] = useState({
        minValue: null,
        maxValue: null,
        Toggle: false
    });

    useEffect( () => {
    }, [])

    useEffect(() => {
    }, [priceFilter, cart])
    

    function priceFilterHandleApply(){
        setPriceFilter( {...priceFilter, Toggle: !priceFilter.Toggle});
    }
    function priceFilterHandleReset(){
        setPriceFilter({minValue: null, maxValue: null, Toggle: false});
    }

    const handleFilterChange = (prop) => (event) => {
        const result = event.target.value.replace(/[^0-9.]/g, '');
        setPriceFilter({ ...priceFilter, [prop]: result });
      };

    return(

        <div className="ShopPage">
            <InputLabel htmlFor="standard-adornment-minPrice">
                Min.
            </InputLabel>
            <Input
                type="numeric"
                placeholder="0.00"
                value={priceFilter.minValue}
                onChange={handleFilterChange("minValue")}
            />
            <InputLabel htmlFor="standard-adornment-minPrice">
                Max.
            </InputLabel>
            <Input
                type="numeric"
                placeholder="1000.00"
                value={priceFilter.maxValue}
                onChange={handleFilterChange("maxValue")}
            />
            <Input
                type="button"
                value={priceFilter.Toggle? "Reset" : "Apply"}
                onClick={priceFilter.Toggle? priceFilterHandleReset : priceFilterHandleApply}
            />
            <ProductList
                priceFilter={priceFilter}
            />
        </div>
    )
};