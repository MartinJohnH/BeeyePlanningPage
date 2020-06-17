import React from 'react';

function LatePanelHeader() {
    return (
        <div className="late-panel-header">
            {/*<img src={require('../assets/logo.png')} alt="avatar"/>*/}
            <div className="collaborator-name--header">
                <h3>Nom du Collaborateur</h3>
                <h4>Poste du collaborateur</h4>
            </div>
            <span>c</span>
        </div>
    );
}

export default LatePanelHeader;
