import { useContext, useEffect } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Card } from "antd";
const { Meta } = Card;
import { ProductsContext } from "../../context/ProductState";

const Products = () => {
  const { products, getProducts, addCart } = useContext(ProductsContext);

  useEffect(() => {
    getProducts();
    console.log("productostos", products);
  }, []);

  const addToCart = (item) => {
    addCart(item);
    console.log("new in chart", item);
  };
  const productList = products.map((item) => {
    return (
      <div key={item._id}>
        <Card
          style={{ width: 300 }}
          actions={[
            <ShoppingCartOutlined key="buy" onClick={() => addToCart(item)} />,
          ]}
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
