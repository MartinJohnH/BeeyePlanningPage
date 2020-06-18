import React from 'react';
import Button from "./Button";

function SubHeader() {
    return (
        <div className="subheader">
            <div className="buttons-left-align">
                <Button
                    dropdown={false}
                    icon='fas fa-map-marker-alt'
                    text="Aujourd'hui"
                />
                <Button
                    dropdown={false}
                    icon='fas fa-arrow-left'
                    text=''
                />
                <Button
                    dropdown={false}
                    icon='fas fa-arrow-right'
                    text=''
                />
                <Button
                    dropdown={true}
                    icon='far fa-calendar'
                    text='Lundi 07 Octobre — Dimanche 13 Octobre'
                />
                <Button
                    dropdown={true}
                    icon='fas fa-calendar-week'
                    text='Semaine'
                />
                <Button
                    dropdown={false}
                    icon='fas fa-pause'
                    text='Écran divisé'
                />
            </div>
            <div className="buttons-right-align">
                <Button
                    dropdown={false}
                    icon=''
                    text='Conflits'
                    counter={true}
                />
                <Button
                    dropdown={false}
                    icon='fas fa-sliders-h'
                    text='Personnaliser'
                />
            </div>
        </div>
    );
}

export default SubHeader;
