import React from "react";

import "./products.styles.sass";
import { useNavigate } from "react-router";

const Products = (props) => {
  const productItems = props.products.map((product) => (
    <div className="product-item" key={product.sku}>
      <input
        type="checkbox"
        onChange={() => props.checked(product.sku)}
        className="delete-checkbox"
      />
      <p>{product.sku}</p>
      <p>{product.name}</p>
      <p>{product.price}</p>
      <p>{product.attributes.attr}</p>
      <br />
    </div>
  ));

  const navigate = useNavigate();

  return (
    <div>
      <nav className="nav-bar">
        <h1>Product List</h1>

        <div>
          <button onClick={()=>navigate("/addProduct")}>
            ADD
          </button>
          <button id="delete-product-btn" onClick={props.delete}>
            MASS DELETE
          </button>
        </div>
      </nav>
        <hr />
    <div className="product-items">
      
      {productItems}
    </div>
    </div>
  );
};

export default Products;
