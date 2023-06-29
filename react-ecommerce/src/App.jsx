import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./context/UserState";
import { ProductsProvider } from "./context/ProductState";
import { OrderProvider } from "./context/OrderState";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header.jsx";
import Register from "./components/Register/Register.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Products from "./components/Products/Products.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Cart from "./components/Cart/Cart.jsx";
import { ConfigProvider } from "antd";

function App() {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#00b96b",
          },
        }}
      >
        <UserProvider>
          <ProductsProvider>
            <OrderProvider>
              <BrowserRouter>
                <Header />
                <Routes>
                  <Route path="/" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/cart" element={<Cart />} />
                </Routes>
                <Footer />
              </BrowserRouter>
            </OrderProvider>
          </ProductsProvider>
        </UserProvider>
      </ConfigProvider>
    </>
  );
}

export default App;
