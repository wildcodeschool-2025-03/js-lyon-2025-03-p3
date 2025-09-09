import "./App.css";
import { useState } from "react";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import Header from "./components/Header";

type User = {
  id: number;
  email: string;
  is_admin: boolean;
};

type Auth = {
  user: User;
  token: string;
};

function App() {
  const [auth, setAuth] = useState<Auth | null>(null);

  return (
    <>
      <ToastContainer />
      <Header />
      <Outlet context={{ auth, setAuth }} />
      <Footer />
    </>
  );
}
export default App;
