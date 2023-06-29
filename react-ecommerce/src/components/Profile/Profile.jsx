import { Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useContext, useEffect } from "react";

import { UserContext } from "../../context/UserState";

const Profile = () => {
  const { data, getInfo } = useContext(UserContext);

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div>
      <div>
        <h2>Profile</h2>
        <span>{console.log(data)}</span>
      </div>
    </div>
  );
};

export default Profile;
