import React, { lazy, Suspense, Fragment } from "react";
import Header from "./header";
import { redirect } from "react-router-dom";

import { useLocation } from 'react-router-dom';

import { useNavigate } from "react-router-dom";


function Layout(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const token = localStorage.getItem('TOKEN');
    console.log("location: ", location );

    React.useEffect(()=>{
        // Unauthorized User will be navigate to signin page
        if(token !== null && !(location.pathname == '/auth/signin' || location.pathname == '/auth/signup')) {
            navigate("/auth/signin");
        }
    }, [location])
    
  
    return (
        <div style={{margin: 0, padding: 0}}>
            {!(location.pathname == '/auth/signin' || location.pathname == '/auth/signup') && <Header/> }
            
            {props.children}
        </div>
    )
        
}

export default Layout;
