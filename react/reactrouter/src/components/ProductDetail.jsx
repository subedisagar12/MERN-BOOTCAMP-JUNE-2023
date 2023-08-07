import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

// const products = [
//   {
//     id: 1,
//     name: "Watch",
//     price: 200,
//   },

//   {
//     id: 2,
//     name: "Pant",
//     price: 1500,
//   },
// ];

function ProductDetail() {
  const params = useParams();
  // const [product, setProduct] = useState({});

  // useEffect(() => {
  //   let tempArray = products.filter((item) => item.id == params.id);
  //   setProduct(tempArray[0]);
  // }, [params.id]);

  return (
    <>
      <h1>Product Detail of: {params.id}</h1>
    </>
  );
}

export default ProductDetail;
