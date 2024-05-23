import styles from "./ui/History.module.css";
import useFetch from "./../hooks/useFetch";
import React, { useState, useEffect,useContext } from "react";
import { CustomContext } from "../../../../utils/Context";
import axios from "axios";

function History() {
  const {count,basket} = useContext(CustomContext)
  const [products, setProducts] = useState();
  const [fetching, isDataLoading, dataError] = useFetch(async () => {
    const response = await axios.get("http://localhost:1337/api/histories");
    setProducts(response.data || {});
    return response;
  });
  useEffect(() => {
    fetching();
  }, []);
  console.log(products);
  const inactive = document.getElementsByClassName(styles.box_history)
  const active = document.getElementsByClassName(styles.box_history_active)
  console.log(active)
  return (
    <div className={styles.history_main}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.title}>Cart</div>
          <div className={count > 0 ? styles.box_history : styles.box_history_active}>
            <div className={styles.box_history_container}>
              {count}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
