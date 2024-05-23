import React, { useState,useEffect } from "react";
import styles from "./ui/Header.module.css";
import KitLogo from "../../../../assets/logo/KitLogo.svg";
import user from "../../../../assets/logo/user.svg";
import cart from "../../../../assets/logo/cart.svg";
import search from "../../../../assets/logo/magnifying_glass.svg";
import burger_menu from "../../../../assets/logo/burger.svg";
import cross from "../../../../assets/logo/cross.svg";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [burger, setBurger] = useState(false);

  const handleClickBurger = () => {
    setBurger((prevState) => !prevState);
  };
  const navigate = useNavigate();
  const LogOut = () =>{
        localStorage.removeItem ("user");
        navigate("/Login")
}

  return (
    <header className={styles.header}>
      <div
        className={`${styles.header__container} ${styles._container} ${
          burger ? styles.block : ""
        }`}
      >
        <div className={styles.header__logo__block}>
          <img className={styles.header__logo__img} src={KitLogo} alt="" />
          <img
            onClick={() => handleClickBurger()}
            className={styles.header__cross}
            src={burger ? cross : ""}
            alt=""
          />
        </div>

        <nav
          className={`${styles.header__navbar} ${burger ? styles.active : ""}`}
        >
          <ul
            className={`${styles.header__list} ${styles.list} ${
              burger ? styles.block : ""
            }`}
          >
            <li className={styles.list__item}>Home</li>
            <li className={styles.list__item}>Products</li>
            <Link to="/About">
            <li className={styles.list__item}>About us</li>
            </Link>
          </ul>
        </nav>

        <div
          className={`${styles.header__buttons__block} ${styles.buttons} ${
            burger ? styles.block : ""
          }`}
        >
          <Link to="/Login">
            <button onClick={LogOut}
              className={`${styles.buttons__item} ${styles.buttons__gap}`}
            >
              <img src={user} alt="" />
              Log out
            </button>
          </Link>
          <Link to="/Profile">
            <button className={styles.buttons__item}>
              <img src={user} alt="" />
            </button>
          </Link>
          <button className={styles.buttons__item}>
            <img src={search} alt="" />
          </button>
        </div>

        <div
          onClick={() => handleClickBurger()}
          className={`${styles.header__burger} ${burger ? styles.active : ""}`}
        >
          <img src={burger_menu} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
