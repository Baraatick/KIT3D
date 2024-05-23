import React from "react";
import styles from "./ui/main.module.css";
import info from "./../../../../assets/photos/information.png";
import menu from "./../../../../assets/photos/coledgphoto.png";

function About() {
  return (
    <>
      <div className={styles.aboutus__wrapper}>
        <div className={styles.content}>
          <img src={menu} about="photo" className={styles.photo} />
          <div className={styles.blured}>
            <p className={styles.text}>Where can you find us?</p>
          </div>
        </div>
        <div className={styles.container}>
          <p className={styles.infotext}>Info</p>
          <div className={styles.info_container}>
            <img src={info} about="info" className={styles.info} />
          </div>
          <p className={styles.maptext}>Our location</p>
          <div className={styles.map_container}>
            <div className={styles.mappos}>
              <div className={styles.map}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2052.151111119418!2d76.95856963914643!3d52.289992144273185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42f9cad21fd2e765%3A0xdbdac8978cb8087b!2z0JDQutC_0LDRgNCw0YLRgtGL0Log0YLQtdGF0L3QvtC70L7Qs9C40Y_Qu9Cw0YAg0LrQvtC70LvQtdC00LbRiw!5e0!3m2!1sru!2skz!4v1711736441571!5m2!1sru!2skz"
                  width="600"
                  height="500"
                  className={styles.map}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
