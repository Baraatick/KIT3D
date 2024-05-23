import useFetch from "../hooks/useFetch";
import React2, { useState, useEffect, useContext } from "react";
import { CustomContext } from "../../../../utils/Context";
import axios from "axios";
import React from "react";
import styles from "./ui/products.module.css";
import modalStyles from "../UI/MyModal/MyModal.module.css";
import MyModal from "../UI/MyModal/MyModal";

function Products() {
  const { count, setCount } = useContext(CustomContext);
  const [base, setBase] = useState();
  const [blur, setBlur] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const [fetching, isDataLoading, dataError] = useFetch(async () => {
    const response = await axios.get(
      "http://localhost:1337/api/posts?populate=*"
    );
    setBase(response.data || {});
    return response;
  });
  useEffect(() => {
    fetching();
  }, []);
  console.log(base);

  function handleClick(post) {
    setSelectedCard(post);
    setBlur((prevstate) => !prevstate);
  }

  return (
    <div className={styles.products}>
      <div className={styles.container}>
        <div className={styles.cards}>
          {/* <div class="cards-line-1"> */}
          {base?.data?.map((post, index) => (
            <div className={styles.card} key={index}>
              {post?.attributes?.post_img?.data?.attributes?.url && (
                <img
                  src={`http://localhost:1337${post?.attributes?.post_img?.data?.attributes?.url}`}
                  alt="card"
                  className={styles.productimg}
                />
              )}
              <div className={styles.card__content}>
                <div className={styles.adjustment}>
                  <div className={styles.title}>{post?.attributes?.test}</div>
                  <div className={styles.price}>
                    {post?.attributes?.price} ₸
                  </div>
                </div>
                <button
                  className={styles.btn}
                  onClick={() => handleClick(post)}
                >
                  Заказать
                </button>
              </div>
            </div>
          ))}
          {/* </div> */}
        </div>
      </div>
      <MyModal
        visible={blur}
        setVisible={setBlur}
        onClose={() => setBlur(false)}
      >
        {selectedCard && (
          <>
            <div className={modalStyles.productContainer}>
              <div className={modalStyles.textProduct}>
                Lorem ipsum dol or sit amet consectetur adipisicing elit.
                Assumenda, qui?
              </div>
              {selectedCard?.attributes?.post_img?.data?.attributes?.url && (
                <img
                  className={modalStyles.productIMG}
                  width="450px"
                  height="300px"
                  src={`http://localhost:1337${selectedCard?.attributes?.post_img?.data?.attributes?.url}`}
                  alt=""
                />
              )}
              {/* <div className={modalStyles.productStars}>
                <div className={modalStyles.productStar}></div>
                <div className={modalStyles.productStar}></div>
                <div className={modalStyles.productStar}></div>
                <div className={modalStyles.productStar}></div>
                <div className={modalStyles.productStar}></div>
                <div className={modalStyles.feedbacksnumber}>
                  16 984 отзывов
                </div>
              </div> */}
              <div className={modalStyles.prize}>44,55₽</div>
              <div className={modalStyles.maindescription}>
                <div className={modalStyles.texttitle}>Описание</div>
                <div className={modalStyles.productdescription}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
                  laborum eaque deserunt placeat ad eos nisi cupiditate,
                  incidunt maxime sint?
                </div>
              </div>
            </div>
            <div className={modalStyles.btnaddbox}>
              <button
                className={modalStyles.btnadd}
                onClick={() => setCount((prev) => prev + 1)}
              >
                Заказать
              </button>
            </div>
          </>
        )}
      </MyModal>
    </div>
  );
}

export default Products;
