import React from 'react';
import Button from "./Button";

function SubHeader() {
    return (
        <div className="subheader">
            <div className="buttons-left-align">
                <Button
                    styleTheme={"light"}
                    dropdown={false}
                    borderRadius={'4px'}
                    icon='A'
                    text="Aujourd'hui"
                />
                <Button
                    styleTheme={"light"}
                    dropdown={false}
                    borderRadius={'4px'}
                    icon='B'
                    text=''
                />
                <Button
                    styleTheme={"light"}
                    dropdown={false}
                    borderRadius={'4px'}
                    icon='N'
                    text=''
                />
                <Button
                    styleTheme={"light"}
                    dropdown={true}
                    borderRadius={'4px'}
                    icon='C'
                    text='Lundi 07 Octobre — Dimanche 13 Octobre'
                />
                <Button
                    styleTheme={"light"}
                    dropdown={true}
                    borderRadius={'4px'}
                    icon='S'
                    text='Semaine'
                />
                <Button
                    styleTheme={"light"}
                    dropdown={false}
                    borderRadius={'4px'}
                    icon='P'
                    text='Écran divisé'
                />
            </div>
            <div className="buttons-right-align">
                <Button
                    styleTheme={"light"}
                    dropdown={false}
                    borderRadius={'20px'}
                    icon='C'
                    text='Conflits'
                />
                <Button
                    styleTheme={"light"}
                    dropdown={false}
                    borderRadius={'20px'}
                    icon='S'
                    text='Personnaliser'
                />
            </div>
        </div>
    );
}

export default SubHeader;
