import {createBrowserRouter, RouterProvider} from "react-router-dom";
import React from "react";
import Root from "./pages/root"
import Home from "./app/home/page";

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
    <div className="App">fard
        <RouterProvider router={router}/>


    </div>
  );
}

export default App;
