import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const isAdmin =  JSON.parse(localStorage.getItem('user'))
    
     if(isAdmin){
         return children;
     }
      return <Navigate to="/" state={{from:location}} replace/>
   
};

export default PrivateRoute;