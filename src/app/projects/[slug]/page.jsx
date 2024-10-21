'use client'

import Element from "../../../Components/BlogParts/Element"
import React, {useState, useEffect} from "react";
import "../../../globals.css"
import Header from "../../../Components/BlogParts/Header";
import TableOfContents from "../../../Components/tableOfContents";
import {ParseJson} from "./projPageServer";
import {CreateIdName} from "../../../Components/BlogParts/Subtitle";

export default function Page(params){
    const [project, setProjects] = useState([]);
    const [headers, setHeaders] = useState([]);
    const [slug, setSlug] = useState('');




    useEffect( () => {


        setSlug(params.params.slug);

        ParseJson(params.params.slug).then((res) =>{
           setProjects(res);
        });

    }, [params.params.slug]);

    useEffect(()=>{
        const UpdateHeadings = () => {
            setHeaders(HeadingsData());
        };
        // Initial scan of headings
        UpdateHeadings();

        // Use MutationObserver to detect DOM changes and update headings dynamically
        const observer = new MutationObserver(() => {
            UpdateHeadings();
        });

        // Observe changes in the body for added/removed elements
        observer.observe(document.body, { childList: true, subtree: false });

        // Cleanup observer on unmount
        return () => {
            observer.disconnect();
        };
    }, [project])


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
    <div className="bg-gradient-to-r from-gray-100 to-gray-200 bg-[length:200%_200%] animate-gradient min-h-screen p-6 flex-row flex justify-center">

        <div className="ease-in duration-200 md:w-2/3 m-auto max-w-4xl">

            <Header element={{content: project.name}}/>

            <div className="flex flex-col-reverse  lg:flex-row gap-5">
                <div className="ease-in duration-200 m-auto backdrop-blur-lg p-6 shadow-2xl rounded-2xl border-gray-200 border border-double min-h-80">

                    {(project != null && project.elements != null) ?
                        project.elements.map((element, index) => (
                            <Element key={index} element={element}/>
                        ))
                        :
                        (<div className="m-auto"></div>)}
                </div>
                <TableOfContentsPane headers={headers}/>
            </div>
        </div>

    </div>
        </>
    );
}


function HeadingsData() {
    let headings = [];

    const headingElements = Array.from(
        document.querySelectorAll("h2")
    );
    headings = CreateObjectFromHeadings(headingElements);

    return headings ;
}


function CreateObjectFromHeadings(headingElements){
    const headings = [];


    headingElements.forEach((headingEl, index) => {
        let {innerText: title, id} = headingEl;
        if(id === ""){
            id = CreateIdName(title);
        }
        //console.log("id: " + id);
        const res = {
            id: id,
            title: title
        }


        headings.push(res);
    });
    //console.log(JSON.stringify(headings));

    return headings;
}


function TableOfContentsPane({headers}){
    const invis = {opacity: 0, pointerEvents: "none", height: "1px", paddingTop: "0px", paddingBottom: "0px"};

    return (
        <div className="w-auto text-nowrap sticky h-min top-8 bg-gray-100  p-4 shadow-2xl rounded-2xl border-gray-200 border border-double" style={(headers.length <= 1) ? invis : {}}>
            <TableOfContents headingData={headers}/>
        </div>
    )
}