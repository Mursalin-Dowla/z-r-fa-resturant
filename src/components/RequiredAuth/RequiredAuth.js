import React, { useEffect, useState } from 'react';
import {onAuthStateChanged } from "firebase/auth";
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const RequiredAuth = ({children}) => {
    const [user,setUser] = useState({});
    const location = useLocation();

    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            setUser(user);
        })
    },[])

    if(!user){
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
    return children;
};

export default RequiredAuth;