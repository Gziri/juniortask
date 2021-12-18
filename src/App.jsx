import React from "react";
import "./App.sass";

import { Routes, Route } from "react-router";

import AddProduct from "./components/add-product.component";
import Products from "./components/products.component";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        {
          sku: "123",
          name: "nadasdasdsme",
          price: "price",
          type: "type",
          attributes: { attr: "value" },
          checked: false,
        },
        {
          sku: "234",
          name: "name",
          price: "price",
          type: "type",
          attributes: { attr: "value" },
          checked: false,
        },
        {
          sku: "345",
          name: "name",
          price: "price",
          type: "type",
          attributes: { attr: "value" },
          checked: false,
        },
        {
          sku: "456",
          name: "name",
          price: "price",
          type: "type",
          attributes: { attr: "value" },
          checked: false,
        },
        {
          sku: "567",
          name: "name",
          price: "price",
          type: "type",
          attributes: { attr: "value" },
          checked: false,
        },
        {
          sku: "678",
          name: "name",
          price: "price",
          type: "type",
          attributes: { attr: "value" },
          checked: false,
        },
        {
          sku: "789",
          name: "name",
          price: "price",
          type: "type",
          attributes: { attr: "value" },
          checked: false,
        },
      ],
    };
  }

  checkHandler = (sku) => {
    this.setState(
      this.state.products.map((p) =>
        p.sku === sku ? (p.checked = !p.checked) : null
      )
    );
    console.log(this.state.products);
  };

  massDeleteHandler = () => {
    this.setState(
      (this.state.products = this.state.products.filter(
        (value) => value.checked !== true
      ))
    );
    console.log(this.state.products);
  };

  render() {
    return (
      <div className="App">
        <div className="content">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Products
                  products={this.state.products}
                  checked={this.checkHandler}
                  delete={this.massDeleteHandler}
                />
              }
            />
            <Route path="/addProduct" element={<AddProduct />} />
          </Routes>
        </div>
        <hr />
        <div className="footer">
          <p>Scandiweb Test Assignment</p>
        </div>
      </div>
    );
  }
}

export default App;
