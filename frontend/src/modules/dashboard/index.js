import React from "react";
import { makeStyles } from '@mui/styles';
import {
  TextField,
  Container,
  Paper,
  Typography,
  InputAdornment
} from '@mui/material';


import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import Rooms from "./rooms"
import Channels from "./channels"

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

const houses = [{id: 1, name:"mansion"},{id: 1, name:"burgos"},{id: 1, name:"dapdap"}]

function Dashboard() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [home, setHome] = React.useState({});
  const open = Boolean(anchorEl);

  React.useEffect(()=> {
    setHome(houses[0]);
  }, [])

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event, value) => {
    console.log("event:", value);
    setHome(value);
    handleClose();
  }

  return (
    <Container maxWidth="xl">
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <HomeIcon/> 
        {home.name ? home.name : "None"}
        <ArrowDropDownIcon/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        { houses && houses.map((item) => {
          return <MenuItem onClick={(e)=>handleChange(e, item)}>{item.name}</MenuItem>
        })}
      </Menu>
      <Rooms/>
      <Channels/>

    </Container>
  )
}

export default Dashboard;
