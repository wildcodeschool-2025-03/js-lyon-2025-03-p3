import "./App.css";
import { Outlet } from "react-router";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Home />
      <main>
        <Outlet />
      </main>
    </>
  );
}
export default App;
