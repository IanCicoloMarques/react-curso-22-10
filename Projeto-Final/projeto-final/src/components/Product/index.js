import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import ProductsContext from "../../contexts/productsContext";
import CartContext from "../../contexts/cartContext";



export default function Product(props){
    const { id } = props;
    const { products } = useContext(ProductsContext);
    const item = products.find(x => x.id == id);
    const { cart, setCart, addProductToCart, removeProductFromCart, updateProductOnCart } = useContext(CartContext);
    const [ counter, setCounter ] = useState(initialCounter);
    const navigate = useNavigate();
    const [imageHover, setImageHover] = useState(false);

       
    function initialCounter(){
        let result = 0;
        const cartItem = cart.find(x => x.id == item.id); 
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
            updateProductOnCart(item.id, counter+1);
            setCounter(counter+1);
        }
      }

      function handleProductSubtract(){
        if (counter == 1){
            removeProductFromCart(item.id);
            setCounter(0);
        }
        else if(counter > 1)
        {
            updateProductOnCart(item.id, counter-1);
            setCounter(counter-1);
        }
      }



    function selectImage(){
        let result = "";
        const cartItem = cart.find(x => x.id == item.id); 
        cartItem?
        result = item.selectedImage
        : result = item.image;
        return result;
      }

    function handleImageStyle(){
        if(!imageHover && !item.price)
            return { filter: "grayscale(100%)" }
    }

    const url = `/detail/${item.id}`;

    return(
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="240"
                style={handleImageStyle()}
                image={selectImage()}
                onMouseEnter={() => setImageHover(true)} 
                onMouseLeave={() => setImageHover(false)}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {item.price? <>V$ {item.price}</>
                : <>OUT OF STOCK</>    
                }
                </Typography>
            </CardContent>
            <CardActions justifyContent="center">
                <Button disabled={item.price==0} size="small" onClick={() => navigate(url)}>Details</Button>
                <Button onClick={handleProductSubtract}>-</Button>
                {counter}
                <Button onClick={handleProductAdd}>+</Button>
            </CardActions>
        </Card>

        // <Link to={url}>
        //     <Card className={classes.root}>

        //     <img src={selectImage(id)}/> 
        //     {name}
        //     </Card>
        // </Link>

        )

}