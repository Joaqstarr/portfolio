'use client'


import {loadJSONFiles, fetchProjects} from "./homeServer";
import TitleBar from "../../Components/TitleBar";
import PortfolioList from "../../Components/PortfolioList";
import {useState, useEffect } from "react";
import AboutMe from "../../Components/AboutMe";

export default function Home() {
    const [projects, setProjects] = useState([]);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        UpdateProjects();

        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const  UpdateProjects = async () =>{
        //const table = await GetAllProjectsFromTable();
        const table = await fetchProjects();
        //console.log(JSON.stringify(table));
        setProjects(table)
    }

    return (

        <div>
            <style jsx>{`
                @keyframes gradient {
                    0% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 0% 50%;
                    }
                }
            `}</style>
            <TitleBar/>
            {/**/}

            <div className="bg-gradient-to-r from-gray-100 to-gray-200 bg-[length:200%_200%] animate-gradient">

                <div className="ease-in duration-200 md:w-2/3 m-auto backdrop-blur-lg">
                    <PortfolioList projects={projects}/>

                </div>
            </div>
            <AboutMe/>



        </div>
    )
}

