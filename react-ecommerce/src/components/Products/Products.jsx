import { useContext, useEffect } from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
const { Meta } = Card;
import { ProductsContext } from "../../context/ProductState";

const Products = () => {
  const { products, getProducts } = useContext(ProductsContext);

  useEffect(() => {
    getProducts();
    console.log("productostos", products);
  }, []);
  const productList = products.map((item) => {
    return (
      <div key={item._id}>
        <Card
          style={{ width: 300 }}
          actions={[<ShoppingCartOutlined key="buy" />]}
        >
          <Meta title={item.name} description={`${item.price.toFixed(2)}$`} />
        </Card>
      </div>
    );
  });
  return (
    <div>
      <div>
        <h2>Products</h2>
        <div className="cardList">{productList}</div>
      </div>
    </div>
  );
};

export default Products;
