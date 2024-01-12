import { useState } from "react";
import "./App.css";
import ProductCard from "../components/ProductCard";
import Products from "../pages/Products";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
