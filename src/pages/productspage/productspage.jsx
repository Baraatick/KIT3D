import React from "react";
import Header from "./components/Header/Header"
import Menu from "./components/Menu/Menu";
import Products from "./components/products/products";
import Footer from "./components/Footer/footer";
import styles from "./components/UI/MyModal/MyModal.module.css";

function productspage() {
  return (
    <div className={styles.body}>
      <Header/>
      <Menu/>
      <Products />
      <Footer />
    </div>
  );
}

export default productspage;
