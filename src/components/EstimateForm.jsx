import React, { Component } from 'react';

class EstimateForm extends Component {
    state = { 
        estimateTitle: ''
     };

    handleSubmit = evt => {
        evt.preventDefault();
        console.log('généré');
        
    }

    handleChange = evt => {
        const title = evt.currentTarget.value;
        console.log(title);
        this.setState({
            estimateTitle: title
        })
        
    }

    render() {
        return (
            <>
                <div>Nouveau devis</div>
                <form onSubmit ={ this.handleSubmit }>
                    <input type="text" name="estimate-title" id="estimate-title" placeholder="titre du devis" value={ this.state.estimateTitle } onChange={ evt => this.handleChange(evt) } />
                    <button type="submit">générer le devis</button>
                </form>
            </>
        );
    }
}

export default EstimateForm;