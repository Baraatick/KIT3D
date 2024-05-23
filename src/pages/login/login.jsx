import styles from "./ui/login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { storeUser } from "../../utils/Context";

const initialUser = { password: "", identifier: "" };

function Registration() {
  const [user, setUser] = useState(initialUser);
  const navigate = useNavigate();
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };
  const handleLogin = async () => {
    const url = `http://localhost:1337/api/auth/local`;
    try {
      if (user.identifier && user.password) {
        const { data } = await axios.post(url, user);
        if (data.jwt) {
          console.log(data);
          storeUser(data);
          toast.success("Logged in succesfully", {
            hideProgressBar: true,
          });
          setUser(initialUser);
          navigate("/Profile");
        }
      }
    } catch (error) {
      toast.error(error.message, {
        hideProgressBar: true,
      });
    }
  };
  return (
    <div className={styles.Registration_body}>
      <div className={styles.main_block}>
        <div className={styles.block}>
          <div className={styles.content_container}>
            <div className={styles.block_text}>Вход</div>
            <div className={styles.block_input}>
              <FormGroup>
                <input
                  className={styles.input_email}
                  type="email"
                  name="identifier"
                  value={user.identifier}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
              </FormGroup>
              <FormGroup>
                <input
                  className={styles.input_password}
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                />
              </FormGroup>
              <div className={styles.chekbox}>
                <div className={styles.check}>
                  <input
                    className={styles.input_chekbox}
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <label className={styles.labels} htmlFor="">
                    Запомнить меня
                  </label>
                </div>
                {/* <a href="/" className={styles.extra_password}>
                  Забыли пароль?
                </a> */}
              </div>

              <div className={styles.button}>
                <button className={styles.btn} onClick={handleLogin}>
                  Enter
                </button>
              </div>
              <div className={styles.text1}>
                Создать аккаунт{" "}
                <span>
                  <Link to="/Registration">
                    <a href="/Registration">Зарегистрироваться</a>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
