import './Register.css'

function Register(props){
const {totalPrice} = props

    return(
        
        <div className="Register">
        <b>Total da compra:</b>
        R$<span>{totalPrice}</span>
        </div>   
    )
}



export default Register