import React from 'react';
import Button from "./Button";

function SubHeader() {
    return (
        <div className="subheader">
            <div className="buttons-left-align">
                <Button
                    dropdown={false}
                    icon='A'
                    text="Aujourd'hui"
                />
                <Button
                    dropdown={false}
                    icon='B'
                    text=''
                />
                <Button
                    dropdown={false}
                    icon='N'
                    text=''
                />
                <Button
                    dropdown={true}
                    icon='C'
                    text='Lundi 07 Octobre — Dimanche 13 Octobre'
                />
                <Button
                    dropdown={true}
                    icon='S'
                    text='Semaine'
                />
                <Button
                    dropdown={false}
                    icon='P'
                    text='Écran divisé'
                />
            </div>
            <div className="buttons-right-align">
                <Button
                    dropdown={false}
                    icon='C'
                    text='Conflits'
                    counter={true}
                />
                <Button
                    dropdown={false}
                    icon='S'
                    text='Personnaliser'
                />
            </div>
        </div>
    );
}

export default SubHeader;
