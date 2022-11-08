// import React from "react";
// import {userRegister} from './service'
// import { useSelector, useDispatch } from 'react-redux';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import {useNavigate} from 'react-router-dom';

// function Auth() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [name, setName] = React.useState("");
//   const [user, setUser] = React.useState("");
//   const [pass, setPass] = React.useState(""); 
 
//   const handleLogin = () => {

//     dispatch(userRegister({displayName: name, username: user, password: pass}))
//     .then(function (res) {
//       console.log(res);
//     })
//     .catch(function (err){
//       console.log(err);
//     })
//     console.log("ni click ko");
//   }
//   const changeField = (type, event) => {
//     if(type === "user") setUser(event.target.value);
//     else if(type === "pass") setPass(event.target.value);
//     else if(type === "name") setName(event.target.value);
//   }

//   const redirectSignin = () => {
//     console.log("heeheheh");
//     navigate("/auth/signin");
//   }

//   return <div>
//       <TextField value={name} onChange={(e) => changeField("name", e)} id="outlined-basic" label="Display name" variant="outlined" />
//       <TextField value={user} onChange={(e) => changeField("user", e)} id="outlined-basic" label="Username" variant="outlined" />
//       <TextField  value={pass} onChange={(e) => changeField("pass", e)} id="outlined-basic" label="Password" variant="outlined" />
//       <Button variant="contained" onClick={()=> handleLogin()}>Sign Up</Button>
//       <span onClick={redirectSignin}>Sign IN</span>
//     </div>
// }

// export default Auth;

import React from "react";
import {userLogin} from './service'
import { useSelector, useDispatch } from 'react-redux';
import {
  TextField,
  Container,
  Paper,
  Typography,
  InputAdornment
} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import LockIcon from '@mui/icons-material/Lock';
import {useNavigate} from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';

const useStyles = makeStyles({
  background: {
    background: "rgb(123,213,245)",
    background: "linear-gradient(45deg, rgba(123,213,245,1) 0%, rgba(255,167,255,1) 100%)",
    height: "calc(100vh)",
    width: "calc(100vw)!important",
    maxWidth: "none!important",
    margin: 0,
    padding: 0,
    paddingTop: 50
  },
  card: {
    width: "300px",
    margin: "auto",
    padding: 30,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textField: {
    marginBottom: "15px!important",
    width: "100%"
  },
  rootButton: {
    background: "linear-gradient(45deg, rgba(123,213,245,1) 0%, rgba(255,167,255,1) 70%)",
    border: 0,
    borderRadius: 40,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    width: "100%",
    paddingInline: 10,
    marginBottom: "15px!important",
    color: "white!important",
    padding: '0 30px',
  }
});

function Auth() {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = React.useState("");
  const [pass, setPass] = React.useState("");
 
  const handleLogin = () => {

    dispatch(userLogin({username: user, password: pass}))
    .then(function (res) {
    console.log("gwapo: ",localStorage.getItem('TOKEN'));                    
                    
      navigate('/admin/dashboard');
    })
    .catch(function (err){
      console.log(err);
    })
  }
  const changeField = (type, event) => {
    if(type === "user") setUser(event.target.value);
    else if(type === "pass") setPass(event.target.value);
  }

  const redirectSignIn = () => {
    console.log("heeheheh");
    navigate("/auth/signin")
  }

  return (
    <Container className={classes.background}>
      <Paper className={classes.card}>  
        <Typography variant="h5" gutterBottom >
          Sign-Up
        </Typography>
        <TextField
          id="input-with-icon-textfield"
          className={classes.textField}
          label="Display Name"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ContactEmergencyIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
        <TextField
          id="input-with-icon-textfield"
          className={classes.textField}
          label="Username"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
        <TextField
          id="input-with-icon-textfield"
          className={classes.textField}
          label="Password"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
        
        <TextField
          id="input-with-icon-textfield"
          className={classes.textField}
          label="Confirm Password"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />

        <Button className={classes.rootButton}>Sign Up</Button>
        <span onClick={redirectSignIn}>←Already Have an Account</span>


        {/* <Button variant="contained" onClick={()=> handleLogin()}>Sign In</Button> */}
        {/* <span onClick={redirectSignup}>Sign Up</span> */}
      </Paper>
      
    
    </Container>
    )
  }
export default Auth;
