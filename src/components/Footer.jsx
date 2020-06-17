import React from 'react';
import LatePanelHeader from "./LatePanelHeader";
import TaskCounter from "./TaskCounter";

function Footer() {
    const daysArray = ["lundi", "mardi", "mercredi", "Jeudi", "vendredi", "samedi", "dimanche"];
    return (
        <div className="footer planning-cards-grid">
            <LatePanelHeader />
            <TaskCounter daysArray={daysArray} />
        </div>
    );
}

export default Footer;
