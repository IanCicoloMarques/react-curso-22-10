import { useState } from "react";
import axios from 'axios';

import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import Visibility from "@mui/icons-material/Visibility";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Input from "@mui/material/Input";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";


export default function RegisterPage(){
    const [user, setUser] = useState("");
    const [address, setAddress] = useState(null);
    const [addressInfo, setAddressInfo] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [zipCodeLock, setZipCodeLock] = useState(false);

    const [password, setPassword] = useState({
        password: "",
        showPassword: false,
      });
      
      const handleClickShowPassword = () => {
        setPassword({ ...password, showPassword: !password.showPassword });
      };
      
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
      
      const handlePasswordChange = (prop) => (event) => {
        setPassword({ ...password, [prop]: event.target.value });
      };

      function handleZipCodeButton(){
        setZipCodeLock(true);
        getAddressData();
        
      }

      function handleChangeAddress(){
        setAddress(null);
        setZipCodeLock(false);
      }

      function getAddressData(){
        const url = process.env.REACT_APP_CEP_URI;
        const promise = axios.get(`${url}/${zipCode}/json`);
        promise.then(response => {
        setAddress(response.data);
        });
        promise.catch(error => console.log("error", error));
      }

      function postUserToAPI(){
        const url = `${process.env.REACT_APP_BACKEND_URI}/users`;
        const payload = {
            "user": user,
            "password": password.password,
            "address": address,
            "addressInfo": addressInfo
        };

        const promise = axios.post(url, payload);
        promise.then(resp => {
            console.log("resp", resp);
            return true;
        })
        promise.catch(resp => {
            console.log("resp", resp);
            return false;
        })
      }

     function handleSubmit(e) {
       e.preventDefault();
        if(postUserToAPI()){
            alert("User register successful. Please log in.")
        }
    };

    

    console.log("address: ", address)

    const zipCodeRegex = /^[0-9]{8}$/;

    return(
        <div>
            <h1>Register form</h1>
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
            <InputLabel htmlFor="standard-adornment-zipcode">
            Zipcode
            </InputLabel>
            <Input
                type = "text"
                disabled={zipCodeLock}
                inputMode= "numeric" 
                onChange={(e) => setZipCode(e.target.value)}
                value={zipCode}
            />
            <Input
                type = "button"
                disabled={!zipCodeRegex.test(zipCode)}
                onClick={address == null ? handleZipCodeButton : handleChangeAddress}
                value={address == null ? "Search" : "Change"}
            />
            <br/>
            <InputLabel htmlFor="standard-adornment-zipcode">
            Address
            </InputLabel>
            {
                address != null ?
                    <Grid>
                        {address.logradouro}
                        <br/>
                        {address.localidade} - {address.uf}
                    </Grid>
                : <div></div>
            }

            <br/>
            <InputLabel htmlFor="standard-adornment-address2">
            Address 2
            </InputLabel>
            <Input
                type = "text"
                onChange={(e) => setAddressInfo(e.target.value)}
                value={addressInfo}
            />
            <br/>
            <Button
                type="submit"
                disabled={!address || !user || !password.password}
            >
                Submit
            </Button>
            </form>
        </div>
    )
}