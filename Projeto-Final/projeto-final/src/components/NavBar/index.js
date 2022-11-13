import NavHeader from "../NavHeader";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import UserContext from "../../contexts/userContext";

export default function NavBar() {
  const {  userLogin, setUserLogin } = useContext(UserContext);
  const navigate = useNavigate();

  function checkLogin(){
    if(userLogin !== null){
      return(
        <Button onClick={() => setUserLogin(null)}>Logout</Button>
      )
    }
    else{
      return(
        <>
          <Button onClick={() => navigate("/register")}>Register</Button>
          <Button onClick={() => navigate("/login")}>Login</Button>
        </>
      )
    }
  }

  return (
    <nav id="navbar" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <NavHeader />
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
          <Button onClick={() => navigate("/")}>Store</Button>
          <Button onClick={() => navigate("/checkout")}>Checkout</Button>
          {checkLogin()}
          </ul>
        </div>
      </div>
    </nav>
  );
}
