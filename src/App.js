import {createBrowserRouter, RouterProvider} from "react-router-dom";
import React from "react";
import Root from "./pages/root"
import Home from "./pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
    },
    {
        path: "/Home",
        element: <Home/>,
    },
]);

function App() {
  return (
    <div className="App">
        <RouterProvider router={router}/>


    </div>
  );
}

export default App;
