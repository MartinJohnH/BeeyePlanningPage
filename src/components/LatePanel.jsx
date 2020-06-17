import React from 'react';
import Card from "./Card";

function LatePanel() {
    return (
        <div className="late-panel">
            <div className="late-banner">
              <span>!</span>
              <span>EN RETARD</span>
            </div>
            <div className="cards-container">
                <Card />
            </div>
        </div>
    );
}

export default LatePanel;
