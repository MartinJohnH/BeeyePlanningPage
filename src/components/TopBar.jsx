import React from 'react';
import Button from "./Button";

//components
function MenuLeft() {
    return (
        <div className="menu-left">
            {/*<img src={require('../assets/logo.png')} alt="logo"/>*/}
            <ul className="button-bar">
                <li>Gestion</li>
                <li>Temps</li>
                <li>Analyse</li>
            </ul>
        </div>
    );
}

function MenuRight() {
    return (
        <div className="menu-right">
            <Button
                styleTheme="dark"
                dropdown={true}
                borderRadius={'20px'}
                icon='T'
                text='Ajouter'
            />
            <ul className="icon-set">
                <li>S</li>
                <li>A</li>
                <li>?</li>
                <li>S</li>
            </ul>
            {/*<img src={require('../assets/logo.png')} alt="avatar"/>*/}
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
