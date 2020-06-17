import React from 'react';
import SubHeader from "./SubHeader";

function Header() {
    return (
        <div className="header">
            <div className="header-title">
                <h1>Mon Planning</h1>
            </div>
            <SubHeader />
        </div>
    );
}

export default Header;
