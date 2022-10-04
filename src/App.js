import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./component/Login/Login";
import Product from "./component/Product/Product";
import Main from "./layout/Main";
import Brance from "./component/Brance/Brance";
import Vegetable from "./Vegetable/Vegetable";
import Home from "./component/Home/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <Home></Home> },
        { path: "/Home", element: <Home></Home> },
        { path: "/Product", element: <Product></Product> },
        { path: "/Vegetable", element: <Vegetable></Vegetable> },
        { path: "/Brance", element: <Brance></Brance> },
        { path: "/Login", element: <Login></Login> },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
