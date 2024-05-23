import { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const CustomContext = createContext();

export const storeUser = (data) => {
  localStorage.setItem(
    "user",
    JSON.stringify({
      username: data.user.username,
      jwt: data.jwt,
    })
  );
};
export const userData = () => {
  const stringifiedUser = localStorage.getItem("user") || '""';
  console.log(JSON.parse(stringifiedUser))
  return JSON.parse(stringifiedUser || {});
};

export const Protector = ({ Component }) => {
  const navigate = useNavigate();
  const { jwt } = userData();
  useEffect(() => {
    if (!jwt) {
      navigate("/Login");
    }
  }, [jwt, navigate]);
  return <Component />;
};

export const Context = (props) => {
  const text = "your cart is empty";
  const [count, setCount] = useState(text);

  const updateCount = () => {
    setCount((prev) => (prev === text ? 1 : prev + 1));
    console.log(count);
  };

  const value = {
    count: count === null ? "empty" : count,
    setCount: updateCount,
  };

  return (
    <CustomContext.Provider value={value}>
      {props.children}
    </CustomContext.Provider>
  );
};
