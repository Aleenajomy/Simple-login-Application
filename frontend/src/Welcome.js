import React from 'react';

const Welcome = () => {
    const username = localStorage.getItem('username');
    
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Welcome, {username}!</h1>
        </div>
    );
};

export default Welcome;
