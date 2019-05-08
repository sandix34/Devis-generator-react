import React, { Component } from 'react';
import Item from './item';
import { renderPDFInDOM } from './pdfMaker';
import InputText from "./InputText";

class EstimateForm extends Component {
  state = {
    id: "",
    title: "",
    customerFirstName: "",
    customerLastName: "",
    items: {}
  };

  /*
  items: {
      "12345": {
          id: "34567",
          description: "unité centrale",
          quantity: "1",
          taxe: 0.2,
          amount: 1400
      },
      "453245": {
          id: "45475324",
          description: "écran",
          quantity: "2",
          taxe: 0.2,
          amount: 400
      }
  }
  */

  handleSubmit = evt => {
    evt.preventDefault();
    console.log('généré');

  }

  handleChange = (evt, name) => {
    const value = evt.currentTarget.value;
    console.log(JSON.stringify({ name: value }));
    console.log(JSON.stringify({ [name]: value }));
    this.setState({
      [name]: value
    })

  }

  addItem = () => {
    const id = Date.now().toString();
    const items = { ...this.state.items };
    console.log(this, items);
    items[id] = {
      id: id,
      description: "description",
      quantity: "1",
      taxe: 0.2,
      amount: 0
    };
    this.setState({ items: items });
  }

  handleItemChange = (evt, item, field) => {
    console.log(evt.currentTarget.value, item, field);
    const value = evt.currentTarget.value;
    const clonedItem = { ...item };
    clonedItem[field] = value;
    const clonedItems = { ...this.state.items };
    clonedItems[clonedItem.id] = clonedItem;
    this.setState({ items: clonedItems });
  };

  render() {
    return (
      <>
        <div>Nouveau devis</div>
        <form onSubmit={this.handleSubmit}>
          <InputText
            label="ID"
            name="id"
            value={this.state.id}
            onChange={this.handleChange}
          />
          <br />
          <InputText
            label="titre"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <br />
          <InputText
            label="Prénom du client"
            name="customerFirstName"
            value={this.state.customerFirstName}
            onChange={this.handleChange}
          />
          <br />
          <InputText
            label="Nom du client"
            name="customerLastName"
            value={this.state.customerLastName}
            onChange={this.handleChange}
          />
          <br />
          <button onClick={this.addItem}>ajouter une ligne</button>
          {Object.keys(this.state.items).map((itemId, index) => (<Item key={index} item={this.state.items[itemId]} onItemChange={this.handleItemChange} />))}
          <button onClick={() => renderPDFInDOM(JSON.stringify(this.state))}>générer le devis au format PDF</button>
        </form>
      </>
    );
  }
}

export default EstimateForm;