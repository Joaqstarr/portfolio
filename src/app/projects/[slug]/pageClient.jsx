'use client'

import Element from "../../../Components/BlogParts/Element"
import React, {useState, useEffect, useRef} from "react";
import "../../../globals.css"
import Header from "../../../Components/BlogParts/Header";
import TableOfContents from "../../../Components/tableOfContents";
import {CreateIdName} from "../../../Components/BlogParts/Subtitle";



export default function PageClient(params){
    const [project, setProjects] = useState([]);
    const [headers, setHeaders] = useState([]);


    useEffect(()=>{
        setProjects(params.project)
    }, [params.project]);


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
    <div className="bg-gradient-to-r from-gray-100 to-gray-200 bg-[length:200%_200%] animate-gradient min-h-screen p-6 flex-row flex justify-center" >

        <div className="ease-in duration-200 md:w-2/3 m-auto max-w-4xl">


            <div className="flex flex-col-reverse lg:items-start items-center lg:flex-row gap-5">

                <div>
                    <BackButton/>
                    <div className="flex flex-row justify-between  w-full -left-1">
                        <Header element={{content: project.name}}/>
                        <SocialButtons github={project.github} itch={project.itch}/>
                    </div>
                    <div
                        className="ease-in duration-200 m-auto backdrop-blur-lg p-6 shadow-2xl rounded-2xl border-gray-200 border border-double min-h-80">

                        {(project != null && project.elements != null) ?
                            project.elements.map((element, index) => (
                                <Element key={index} element={element}/>
                            ))
                            :
                            (<div className="m-auto"></div>)}
                    </div>
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

    return headings;
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
    const [isOpen, setIsOpen] = useState(true);
    const containerRef = useRef(null);
    const [height, setHeight] = useState('auto');

    const invis = {opacity: 0, pointerEvents: "none", height: "1px", paddingTop: "0px", paddingBottom: "0px"};

    const handleOnClick = () =>{
        setIsOpen((prev) => !prev);
    }

    useEffect(() => {
        if (isOpen) {
            if(height !== 'auto')
                setHeight(containerRef.current.scrollHeight); // Set height to full content height
        } else {

            setHeight(0); // Set height to 0 when collapsed
        }



    }, [isOpen]);
    return (
        <div
            className="lg:mt-20 w-auto text-nowrap bottom-5 lg:bottom-auto fixed lg:sticky h-min lg:top-8 bg-gray-100 p-4 pb-0 shadow-2xl rounded-2xl border-gray-200 border border-double "
            style={(headers.length <= 1) ? invis : {}}>
            <h3 className="font-bold text-lg">Table of Contents</h3>
            <div className="ease-in-out duration-150 transition-all" style={{height: height}}>
                <div className={`transition-opacity duration-75 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
                     ref={containerRef}>
                    <TableOfContents headingData={headers} enabled={isOpen}/>

                </div>
            </div>
            <button onClick={handleOnClick} className="mb-2 relative w-full lg:opacity-0 lg:h-0 lg:pointer-events-none">
                <i aria-hidden className={`m-auto fa-solid fa-angle-${isOpen ? 'up' : 'down'}`}></i>
            </button>
        </div>
    )
}

function SocialButtons({github, itch}) {
    return (
        <div className="flex flex-row items-end pb-2 gap-2">
            {github && <SocialButton link={github} icon="fa-github"/>}
            {itch && <SocialButton link={itch} icon="fa-itch-io"/>}
        </div>

    )
}

function SocialButton({link, icon}){
    return(
        <a href={link} target="_blank" className="h-min">
            <i aria-hidden className={`fa-brands ${icon} text-4xl cursor-pointer`}></i>
        </a>
    )
}

function BackButton(){
    return (
    <div>
        <a href={process.env.NEXT_PUBLIC_API_URL} className="w-full h-full cursor-pointer text-slate-600 z-30">
            <i aria-hidden className="fa-solid fa-rotate-left"></i> back
        </a>
    </div>);
}

