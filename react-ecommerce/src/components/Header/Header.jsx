/* eslint-disable react/prop-types */
import {
  LoginOutlined,
  UserAddOutlined,
  AppstoreOutlined,
  ProfileOutlined,
  ShoppingCartOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserState";

const Header = (props) => {
  const { data, registerNewUser, token, login, logout } =
    useContext(UserContext);
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
        {
          label: "Profile",
          key: "profile",
          icon: <ProfileOutlined />,
        },
        {
          label: "Cart",
          key: "cart",
          icon: <ShoppingCartOutlined />,
        },
        {
          label: "Logout",
          key: "logout",
          icon: <LogoutOutlined />,
        },
      ];
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [current, setCurrent] = useState("");

  const onClick = (e) => {
    console.log("click ", e);
    if (e.key !== "logout") {
      navigate(`/${e.key}`);
    } else {
      logout();
      setCurrent("");
      navigate(`/`);
    }

    setCurrent(e.key);
  };

  useEffect(() => {
    navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (token) {
      setCurrent("products");
    }
  }, [token]);
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
