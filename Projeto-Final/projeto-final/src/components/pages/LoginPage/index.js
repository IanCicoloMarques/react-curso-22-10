import { useContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import UserContext from "../../../contexts/userContext";
import axios from 'axios'

import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import Visibility from "@mui/icons-material/Visibility";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Input from "@mui/material/Input";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

export default function LoginPage(){
  const {  userLogin, setUserLogin } = useContext(UserContext);
  const [ user, setUser ] = useState("");
  const [ password, setPassword ] = useState({
    password: "",
    showPassword: false,
  });

  const navigate = useNavigate();
    
  useEffect( () => {
    if(userLogin !== null){

        navigate("/");
    }}, [userLogin, navigate])
  

  const handleClickShowPassword = () => {
    setPassword({ ...password, showPassword: !password.showPassword });
  };
  
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  const handlePasswordChange = (prop) => (event) => {
    setPassword({ ...password, [prop]: event.target.value });
  };

  async function getUserFromApi(){
    const url = `${process.env.REACT_APP_BACKEND_URI}/users?user=${user}&password=${password.password}`;
    return axios({
        method: "get",
        url: url
      })
      .then(response => {
        return response.data[0];
      })
      .catch( (error) => {
        console.log("error", error);
        return -1;
      })
  }

  async function handleSubmit(e){
    e.preventDefault();
    const userReturn = await getUserFromApi();

    if(userReturn !== -1){
      console.log("login user", userReturn)
      setUserLogin(userReturn)
      navigate("/")
    }
    else{
      alert("Invalid user and/or password");
    }
  };


    return (
      <div>
          <h1>Login</h1>
          <form onSubmit={(e) => handleSubmit(e)}>
          <InputLabel htmlFor="standard-adornment-user">
          User
          </InputLabel>
          <Input
              type="text"
              onChange={(e) => setUser(e.target.value)}
              value={user}
          />
          <InputLabel htmlFor="standard-adornment-password">
          Password
          </InputLabel>
          <Input
              type={password.showPassword ? "text" : "password"}
              onChange={handlePasswordChange("password")}
              value={password.password}
              endAdornment={
                  <InputAdornment position="end">
                  <IconButton
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                  >
                  {password.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                  </InputAdornment>
              }
          />

          <br/>
          <Button
              type="submit"
              disabled={ !user || !password.password}
          >
              Login
          </Button>
          </form>
      </div>
  )
}