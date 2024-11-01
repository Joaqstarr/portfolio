'use client'

import { BrowserRouter } from "react-router-dom";
import Home from "./home/home.jsx"
import { useState, useEffect} from "react";

export function ClientOnly({projects}) {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        // Component is mounted, now it's safe to use `window` or `document`
        setIsBrowser(true);
    }, []);

    if (!isBrowser) {
        return null; // Return null on the server
    }

    return (

        <BrowserRouter>
            <Home projects={projects} />

        </BrowserRouter>

    )
}