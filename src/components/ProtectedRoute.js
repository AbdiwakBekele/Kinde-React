// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import KindeAuth from '@kinde-oss/kinde-auth-react';

const { useKindeAuth } = KindeAuth;

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, isLoading } = useKindeAuth();

    if (isLoading) return <p>Loading...</p>;

    return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
