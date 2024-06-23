// Avatar.js
import React from 'react';
import './avatar.css'; // Archivo CSS module para los estilos

const Avatar = ({ imageUrl }) => {
    return (
        <div className='avatar'>
            <img src={`${process.env.PUBLIC_URL}/assets/${imageUrl}`} alt="Avatar" />
        </div>
    );
};

export default Avatar;