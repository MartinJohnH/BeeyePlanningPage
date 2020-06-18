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
                icon='far fa-folder-open'
                text='Ajouter'
            />
            <div className="icon-set">
                <div className="icon-link">
                    <i className="fas fa-search"/>
                </div>
                <div className="icon-link">
                    <i className="far fa-bell"/>
                </div>
                <div className="icon-link">
                    <i className="far fa-question-circle"/>
                </div>
                <div className="icon-link">
                    <i className="fas fa-cog"/>
                </div>
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
