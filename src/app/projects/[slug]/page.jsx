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
        <div className="bg-repeat h-full min-h-screen p-8" style={{backgroundImage:`url(${bgUrl})`}}>
            <div className="ease-in duration-200 md:w-2/3 m-auto ">

                <Header element={{content:project.name}}/>
                <div className="bg-slate-200 p-4 shadow-2xl rounded-2xl">
                    {project != null && project.elements != null ?
                        project.elements.map((element, index) => (
                            <Element key={index} element={element}/>
                        )) : (<div>loading...</div>)}
                </div>
            </div>

        </div>

    );
}