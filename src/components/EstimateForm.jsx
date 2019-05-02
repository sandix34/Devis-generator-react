import React, { Component } from 'react';

class EstimateForm extends Component {
    state = {}

    handleSubmit = evt => {
        evt.preventDefault();
        console.log('généré');
        
    }

    render() {
        return (
            <>
                <div>Nouveau devis</div>
                <form onSubmit ={ this.handleSubmit }>
                    <input type="text" name="estimate-title" id="estimate-title" placeholder="titre du devis" />
                    <button type="submit">générer le devis</button>
                </form>
            </>
        );
    }
}

export default EstimateForm;