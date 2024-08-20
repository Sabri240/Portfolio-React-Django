

"use client"; // Add this at the top to mark as a Client Component

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
    const [profile, setProfile] = useState({});

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/profile/')
            .then(response => setProfile(response.data))
            .catch(error => console.error('Error fetching profile:', error));
    }, []);

    return (
        <div className="max-w-2xl mx-auto bg-white p-8 shadow-md rounded-lg">
            <h1 className="text-3xl font-bold mb-4 border-b pb-2">Profile Info</h1>
            <p className="text-lg"><strong>Name:</strong> {profile.name}</p>
            <p className="text-lg"><strong>Email:</strong> {profile.email}</p>
            <p className="text-lg"><strong>Location:</strong> {profile.location}</p>
            <p className="text-lg"><strong>Profile:</strong> {profile.profile}</p>
        </div>
    );
}

export default Profile;