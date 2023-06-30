import { Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Card } from "antd";
const { Meta } = Card;
import { useContext, useEffect } from "react";

import { UserContext } from "../../context/UserState";

const Profile = () => {
  const { data, getInfo } = useContext(UserContext);

  useEffect(() => {
    getInfo();
  }, []);
  const orders =
    (data?.orderIds &&
      data?.orderIds.map((order) => {
        return (
          <div key={order._id}>
            <Card
              style={{ width: 340, height: 340 }}
              className="padding"
              cover={
                <img
                  alt="order"
                  src="https://cdn.pixabay.com/photo/2016/07/23/12/54/box-1536798_1280.png"
                />
              }
            >
              <Meta title={`Order: ${order._id}`} description={order.status} />
            </Card>
          </div>
        );
      })) ||
    "No orders found";

  return (
    <div>
      <div className="profile-info">
        <h2>Profile info</h2>
        <span>{console.log(data)}</span>
        <span>Email: {data.email}</span>
        <span>Nickname: {data.name}</span>
        <span>Nickname: {data.role}</span>
      </div>
      <h3>Orders:</h3>
      <div className="orderList">{orders}</div>
    </div>
  );
};

export default Profile;
