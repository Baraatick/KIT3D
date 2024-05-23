import { useState } from "react";
import styles from "./ui/registration.module.css";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const initialUser = {emai:"", password:"", username:""}

function Registration() {
  const [user, setUser] = useState(initialUser);
  const navigate = useNavigate()
  const signUp = async() => {
    try {
      const url = `http://localhost:1337/api/auth/local/register`
      if(user.username && user.email && user.password){
        const res = await axios.post(url,user)
        if(!! res){
          toast.success("Registrated successfully!", {
            hideProgressBar:true,
          })
          setUser(initialUser)
          navigate("/Login")
        }
      }
    } catch (error) {
      toast.error(error.message, {
        hideProgressBar: true,
      }) 
    }
  };
  const handleUserChange = ({target}) => {
    const {name,value} = target;
    setUser ((currentUser)=> ({
      ...currentUser,
      [name]:value,
    }))
  }
  return (
    <main>
      <div className={styles.main_block}>
        <div className={styles.block}>
          <div className={styles.content_container}>
            <div className={styles.block_text}>Регистрация</div>

            <div className={styles.block_input}>
                <input
                  className={styles.input_name}
                  type="text"
                  name="username"
                  value={user.username}
                  onChange={handleUserChange}
                  placeholder="Введите свое имя"
                />
              <FormGroup>
                <input
                  className={styles.input_email}
                  type="email"
                  name="email"
                  onChange={handleUserChange}
                  placeholder="Введите свой email"
                />
              </FormGroup>
              <FormGroup>
                <input
                  className={styles.input_password}
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleUserChange}
                  placeholder="Придумайте пароль"
                />
              </FormGroup>
              <div className={styles.chekbox}>
                <div className={styles.button}>
                  <button className={styles.btn} onClick={signUp}>Sign up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Registration;
