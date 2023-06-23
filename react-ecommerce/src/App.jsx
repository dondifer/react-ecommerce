import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./context/UserState";
import { useContext, useEffect } from "react";
import { UserContext } from "./context/UserState";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header.jsx";
import Register from "./components/Register/Register.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  const links = [
    { name: "Login", url: "/" },
    { name: "Register", url: "/register" },
  ];
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <Header links={links} />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;
