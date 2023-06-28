import { useContext } from "react";
import { ProductsContext } from "../../context/ProductState";
import { Card } from "antd";
const { Meta } = Card;

const Cart = () => {
  const { cart } = useContext(ProductsContext);

  if (cart.length <= 0) {
    return <span>No tienes ningún producto añadido</span>;
  }

  const cartList = cart.map((item) => {
    return (
      <div key={item._id}>
        <Card style={{ width: 300 }}>
          <Meta title={item.name} description={`${item.price.toFixed(2)}$`} />
        </Card>
      </div>
    );
  });

  return (
    <div>
      <div>
        <h2>Products</h2>
        <div className="cardList">{cartList}</div>
      </div>
    </div>
  );
};

export default Cart;
