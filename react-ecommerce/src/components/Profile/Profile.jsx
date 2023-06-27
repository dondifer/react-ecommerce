import { Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useContext } from "react";

import { UserContext } from "../../context/UserState";

const Profile = () => {
  const { data, registerNewUser, token, login } = useContext(UserContext);

  return (
    <div>
      <div>
        <h2>Profile</h2>
      </div>
    </div>
  );
};

export default Profile;
