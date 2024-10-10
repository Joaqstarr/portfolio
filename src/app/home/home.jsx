'use client'


import {loadJSONFiles} from "./homeServer";
import TitleBar from "../../Components/TitleBar";
import PortfolioList from "../../Components/PortfolioList";
import {useState, useEffect } from "react";

export default function Home() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        UpdateProjects();
    }, []);

    const  UpdateProjects = async () =>{
        //const table = await GetAllProjectsFromTable();
        const table = await loadJSONFiles('public/projects/');
        //console.log(JSON.stringify(table));
        setProjects(table)
    }

    return (
        <div>
            <TitleBar />
            {/**/}
            <div className="bg-slate-100">
                <div className="ease-in duration-200 md:w-2/3 m-auto">
                    <PortfolioList projects={projects}/>

                </div>
            </div>

        </div>
    )
}
//bg-gradient-to-bl from-violet-900 to-cyan-400