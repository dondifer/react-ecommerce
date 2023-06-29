import { useContext } from "react";
import { ProductsContext } from "../../context/ProductState";
import { OrdersContext } from "../../context/OrderState";
import { Card } from "antd";
const { Meta } = Card;

const Cart = () => {
  const { cart, clearCart } = useContext(ProductsContext);

  const { orders, makeOrder } = useContext(OrdersContext);

  if (cart.length <= 0) {
    return <h2>No tienes ningún producto añadido</h2>;
  }

  const createNewOrder = () => {
    makeOrder(cart);
    clearCart();
  };

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
        <h2>Cart</h2>
        <div className="cardList">{cartList}</div>
        <button className="actionCart" onClick={() => clearCart()}>
          Clear cart
        </button>
        <button onClick={() => createNewOrder()}>Create Order</button>
      </div>
    </div>
  );
};

export default Cart;
