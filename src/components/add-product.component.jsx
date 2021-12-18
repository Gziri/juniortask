import React from "react";

import "./add-product.styles.sass";

import { useState } from "react";
import { useNavigate } from "react-router";

const AddProduct = () => {
  // needs custom validation
  // deleted submit button, so valitaion should be from outside the form tag
  const [chosenType, setType] = useState(null);
  console.log(chosenType);

  const types = {
    DVD: {
      optionID: "DVD",
      inputs: [{ label: "Size (mb)", id: "size" }],
      description: "Please, provide size",
    },
    BOOK: {
      optionID: "BOOK",
      inputs: [{ label: "Weight (KG)", id: "weight" }],
      description: "Please, provide weight",
    },
    FURNITURE: {
      optionID: "FURNITURE",
      inputs: [
        { label: "Height (CM)", id: "height" },
        { label: "Width (width)", id: "width" },
        { label: "Length (CM)", id: "length" },
      ],
      description: "Please, provide dimensions",
    },
  };

  const chosenTypeForm = chosenType ? (
    <div id={types[chosenType].optionID} className="container-div">
      <div className="type-div">
        <div className="labels">
          {types[chosenType].inputs.map((input) => (
            <label htmlFor={input.id} key={input.id}>
              {input.label}
            </label>
          ))}
        </div>
        <div className="inputs">
          {types[chosenType].inputs.map((input) => (
            <div>
              <input type="text" id={input.id} />
            </div>
          ))}
        </div>
      </div>
      <p>{types[chosenType].description}</p>
    </div>
  ) : null;

  const navigate = useNavigate();

  const navigation = (
    <nav className="nav-bar">
      <h1>Product Add</h1>

      <div>
        <button>SAVE</button>
        <button onClick={() => navigate("/")}>Cancel</button>
      </div>
    </nav>
  );

  const addProductForm = (
    <div className="product_form">
      <form action="submit">
        <div className="main">
          <div className="labels">
            <label htmlFor="sku">
              <span>SKU</span>
            </label>
            <label htmlFor="name">
              <span>NAME</span>
            </label>
            <label htmlFor="nameprice">
              <span>PRICE</span>
            </label>
            <label htmlFor="typeSwitcher">
              <span>TypeSwitcher</span>
            </label>
          </div>
          <div className="inputs">
            <input type="text" id="sku" required />
            <input type="text" id="name" required />
            <input type="text" id="nameprice" required />
            <select
              type="text"
              id="typeSwitcher"
              className="productType"
              onChange={(e) => setType(e.target.value)}
              required
            >
              <option value=""></option>
              <option value="DVD">DVD</option>
              <option value="BOOK">Book</option>
              <option value="FURNITURE">Furniture</option>
            </select>
          </div>
        </div>
        {chosenTypeForm}
      </form>
    </div>
  );

  return (
    <div>
      {navigation}
      <hr />
      {addProductForm}
    </div>
  );
};

export default AddProduct;
