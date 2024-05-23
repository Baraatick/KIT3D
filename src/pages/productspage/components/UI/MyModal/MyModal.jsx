import styles from "./MyModal.module.css";

const MyModal = ({ children, visible, setVisible, ...props }) => {
  const rootClasses = [styles.blur];

  if (visible === true) {
    rootClasses.push(styles.active);
    document.body.style.overflow = "hidden"; // Prevent scrolling on the body
  } else {
    document.body.style.overflow = ""; // Allow scrolling on the body when modal is closed
  }

  return (
    <div
      {...props}
      className={rootClasses.join(" ")}
      onClick={() => setVisible(false)}
    >
      <div onClick={(e) => e.stopPropagation()} className={styles.extra_window}>
        <div className={styles.cross} onClick={() => setVisible(false)}>
          X
        </div>{" "}
        {/* Close button */}
        {children}
      </div>
    </div>
  );
};

export default MyModal;
