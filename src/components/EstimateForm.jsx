import React, { Component } from 'react';

class EstimateForm extends Component {
    state = {
        id: "",
        title: "",
        customerFirstName: "",
        customerLastName: "",
        items: {}
    };

    handleSubmit = evt => {
        evt.preventDefault();
        console.log('généré');

    }

    handleChange = (evt, name) => {
        const value = evt.currentTarget.value;
        console.log(JSON.stringify({name: value}));
        console.log(JSON.stringify({[name]: value}));
        this.setState({
           [name]: value
        })

    }

    render() {
        return (
            <>
                <div>Nouveau devis</div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="id" id="id" placeholder="ID" value={this.state.id} onChange={evt => this.handleChange(evt, 'id')} /> <br/>
                    <input type="text" name="title" id="title" placeholder="titre du devis" value={this.state.Title} onChange={evt => this.handleChange(evt,'title')} /> <br/>
                    <input type="text" name="customerFirstName" id="customerFirstName" placeholder="prénom" value={this.state.customerFirstName} onChange={evt => this.handleChange(evt,'customerFirstName')} /> <br/>
                    <input type="text" name="customerLastName" id="customerLastName" placeholder="nom" value={this.state.customerLastName} onChange={evt => this.handleChange(evt, 'customerLastName')} />
                    <button type="submit">générer le devis</button>
                </form>
            </>
        );
    }
}

export default EstimateForm;