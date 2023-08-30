import React, { useState, useEffect } from "react";
import axios from "axios";

function APICalling() {
  const [allProduct, setAllProducts] = useState([]);

  function fetchProduct() {
    axios({
      url: "http://localhost:8888/product/all",
      method: "GET",
    })
      .then((res) => {
        console.log(res.data.data);
        setAllProducts(res.data.data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <h1>Hello From API</h1>
      {/* <button onClick={fetchProduct}>Fetch Product</button> */}

      <ul>
        {allProduct.map((product) => (
          <li key={product._id}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </>
  );
}

export default APICalling;
