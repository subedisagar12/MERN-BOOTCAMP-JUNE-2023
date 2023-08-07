import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/product">
          <Route index element={<Product />} />
          <Route path=":id" element={<ProductDetail />} />
          <Route path="new" element={<h1>New Product</h1>} />
        </Route>

        {/* <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/product/new" element={<h1>New Product</h1>} /> */}
      </Routes>

      {/* <Home />
      <About />

      <Contact /> */}
    </>
  );
}

export default App;
