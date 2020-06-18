import React from 'react';

function LatePanelHeader() {
    return (
        <div className="late-panel-header">
            <div className="panel-inner-wrapper">
                <img className="avatar" src={require('../assets/avatar.png')} alt="avatar"/>
                <div className="collaborator-name--header">
                    <h3>Nom du Collaborateur</h3>
                    <h4>Poste du collaborateur</h4>
                </div>
            </div>
            <span>c</span>
        </div>
    );
}

export default LatePanelHeader;
