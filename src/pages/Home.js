// src/pages/Home.js
import React from 'react';
// import KindeComponents from '@kinde-oss/kinde-auth-react/components';
// import KindeAuth from '@kinde-oss/kinde-auth-react';

// const { useKindeAuth } = KindeAuth;
// const { LoginLink, RegisterLink, LogoutLink } = KindeComponents;



const Home = () => {
    // const { isAuthenticated } = useKindeAuth();

    return (
        <div>
            <h1>Welcome to Kinde + React</h1>
            {/* {!isAuthenticated ? (
                <>
                    <LoginLink>Sign In</LoginLink> | <RegisterLink>Sign Up</RegisterLink>
                </>
            ) : (
                <LogoutLink>Sign Out</LogoutLink>
            )} */}
        </div>
    );
};

export default Home;
