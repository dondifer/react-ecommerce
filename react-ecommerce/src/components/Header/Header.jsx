/* eslint-disable react/prop-types */
import {
  LoginOutlined,
  UserAddOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserState";

const Header = (props) => {
  const { data, registerNewUser, token } = useContext(UserContext);
  const items = !token
    ? [
        {
          label: "Login",
          key: "",
          icon: <LoginOutlined />,
        },
        {
          label: "Register",
          key: "register",
          icon: <UserAddOutlined />,
        },
        {
          label: "Products",
          key: "products",
          icon: <AppstoreOutlined />,
        },
      ]
    : [
        {
          label: "Products",
          key: "products",
          icon: <AppstoreOutlined />,
        },
      ];
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    navigate(`/${e.key}`);
    setCurrent(e.key);
  };

  useEffect(() => {
    navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    // <div>
    //   <nav>
    //     <ul className="bullet-less">
    //       {props.links.map((link, index) => (
    //         <li key={index}>
    //           <Link to={link.url}>{link.name}</Link>
    //         </li>
    //       ))}
    //     </ul>
    //   </nav>
    // </div>
    <Menu
      className="menu"
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default Header;
