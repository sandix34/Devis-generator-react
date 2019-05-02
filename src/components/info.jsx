import React, { Component } from 'react';

class Info extends Component {
    state = {}
    render() {
        return (
            <div>
                <h2>Bienvenue sur votre générateur de devis</h2>
                <div>
                    Créer un devis ? C'est simple : cliquez sur  
                    <button onClick={ this.props.onHandleShowEstimateForm } >nouveau devis</button>
                </div>
            </div>
        );
    }
}

export default Info;