"use client"

import TitleBar from "../Components/TitleBar";
import PortfolioList from "../Components/PortfolioList";
import {GetAllProjectsFromTable} from "../Postgress/Database";
import {useState, useEffect } from "react";

export default function Home() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        UpdateProjects();
    }, []);

    const  UpdateProjects = async () =>{
        const table = await GetAllProjectsFromTable();
        setProjects(table)
    }

    return (
        <div>
            <TitleBar />
            {/**/}
            <div className="ease-in duration-200 md:w-2/3 m-auto">
                <PortfolioList projects={projects}/>

            </div>
        </div>
    )
}