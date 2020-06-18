import React from 'react';
import Card from "./Card";

function LatePanel() {
    return (
        <div className="late-panel">
            <div className="cards-container late-panel">
                <div className="late-banner">
                    <i className="fas fa-exclamation-triangle"/>
                    <span>EN RETARD</span>
                </div>
                <Card isCompleted={false} isLate={true} />
                <Card isCompleted={false} isLate={true} />
            </div>
        </div>
    );
}

export default LatePanel;
