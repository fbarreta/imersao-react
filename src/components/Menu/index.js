import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../assets/img/logo.png';
import './Menu.css';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={logo} alt="Logo" />
            </a>
            
            <Button as={Link} to="/cadastro/video">
                Novo Video
            </Button>
        </nav>
    );
}

export default Menu;
