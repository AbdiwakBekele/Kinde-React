// src/pages/Profile.js
import React from 'react';
import KindeAuth from '@kinde-oss/kinde-auth-react';

const { useKindeAuth } = KindeAuth;

const Profile = () => {
    const { user } = useKindeAuth();

    return (
        <div>
            <h2>Welcome, {user?.given_name || user?.email}!</h2>
            <p>Email: {user?.email}</p>
        </div>
    );
};

export default Profile;
