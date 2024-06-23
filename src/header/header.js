// Header.js
import React from 'react';
import './header.css'; // Archivo CSS module para los estilos
import Avatar from '../avatar/avatar';
import SoundControl from '../icons/sound-config';
import SettingControl from '../icons/setting-config';
import WalletControl from '../icons/wallet-config';


const Header = ({ username, avatarUrl }) => {
    return (
        <header className='header'>
            <div className='header'>
                <Avatar imageUrl={avatarUrl} />
                <div className='username'>{username}</div>
            </div>
            <div className='header'>
                <WalletControl />
                <SoundControl />
                <SettingControl />
            </div>
        </header>
    );
};

export default Header;