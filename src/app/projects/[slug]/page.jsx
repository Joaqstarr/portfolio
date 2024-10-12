'use client'

import Element from "../../../Components/BlogParts/Element"
import React, {useState, useEffect} from "react";
import "../../../globals.css"
import Header from "../../../Components/BlogParts/Header";

export default function Page(params){
    const [project, setProjects] = useState([]);

    const [slug, setSlug] = useState('');

    const bgUrl = "/cross-stripes.png";
    const ParseJson = async (slug) =>{
        try{
            const response = await fetch('/projects/' + slug +'.json');

            if(!response.ok) throw new Error('Failed to fetch JSON');

            const data = await response.json();
            setProjects(data);
            console.log(JSON.stringify(data));
        }catch(error){
            console.error("Error Fetching JSON: ", error);
        }

    }


    useEffect(() => {
        setSlug(params.params.slug)
        ParseJson(params.params.slug);
    }, [params.params.slug]);
    console.log();
    return (
        <>
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
    <div className="bg-gradient-to-r from-gray-100 to-gray-200 bg-[length:200%_200%] animate-gradient min-h-screen p-6">

        <div className="ease-in duration-200 md:w-1/2 m-auto max-w-screen-sm">

            <Header element={{content: project.name}}/>
            <div className="ease-in duration-200 m-auto backdrop-blur-lg p-6 shadow-2xl rounded-2xl border-gray-200 border border-double min-h-80">
                {(project != null && project.elements != null) ?
                    project.elements.map((element, index) => (
                            <Element key={index} element={element}/>
                        ))
                        :
                        (<div className="m-auto"></div>)}
                </div>
            </div>

        </div>
        </>
    );
}