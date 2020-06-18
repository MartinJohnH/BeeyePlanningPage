import React from 'react';
import Button from "./Button";

//components
function MenuLeft() {
    return (
        <div className="menu-left">
            <img className="logo" src={require('../assets/logo.png')} alt="logo"/>
            <div className="button-bar">
                <a href="#">Gestion</a>
                <a href="#">Temps</a>
                <a href="#">Analyse</a>
            </div>
        </div>
    );
}

function MenuRight() {
    return (
        <div className="menu-right">
            <Button
                dropdown={true}
                icon='T'
                text='Ajouter'
            />
            <div className="icon-set">
                <a href="#">S</a>
                <a href="#">A</a>
                <a href="#">?</a>
                <a href="#">S</a>
            </div>
            <img className="avatar" src={require('../assets/avatar.png')} alt="avatar"/>
        </div>
    );
}

function TopBar() {
    return (
        <div className="top-bar">
            <MenuLeft />
            <MenuRight />
        </div>
    );
}

export default TopBar;
