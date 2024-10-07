'use client'

import { BrowserRouter } from "react-router-dom";
import Home from "./home/home.jsx"

export function ClientOnly() {


    return (

        <BrowserRouter>
            <Home />

        </BrowserRouter>

    )
}