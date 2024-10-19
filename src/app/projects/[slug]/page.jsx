'use client'

import Element from "../../../Components/BlogParts/Element"
import React, {useState, useEffect} from "react";
import "../../../globals.css"
import Header from "../../../Components/BlogParts/Header";
import TableOfContents from "../../../Components/tableOfContents";

export default function Page(params){
    const [project, setProjects] = useState([]);
    const [headers, setHeaders] = useState([]);
    const [slug, setSlug] = useState('');

    const bgUrl = "/cross-stripes.png";
    const ParseJson = async (slug) =>{
        try{
            const response = await fetch('/projects/' + slug +'.json');

            if(!response.ok) throw new Error('Failed to fetch JSON');

            const data = await response.json();
            setProjects(data);
        }catch(error){
            console.error("Error Fetching JSON: ", error);
        }

    }


    useEffect( () => {
        async function FetchPageData(){
            setSlug(params.params.slug);
            await ParseJson(params.params.slug);

        }
        FetchPageData();

    }, [params.params.slug]);

    useEffect(()=>{
        const updateHeadings = () => {
            setHeaders(useHeadingsData());
        };
        // Initial scan of headings
        updateHeadings();

        // Use MutationObserver to detect DOM changes and update headings dynamically
        const observer = new MutationObserver(() => {
            updateHeadings();
        });

        // Observe changes in the body for added/removed elements
        observer.observe(document.body, { childList: true, subtree: true });

        // Cleanup observer on unmount
        return () => {
            observer.disconnect();
        };
    }, [project])
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
    <div className="bg-gradient-to-r from-gray-100 to-gray-200 bg-[length:200%_200%] animate-gradient min-h-screen p-6 flex-row flex justify-center">

        <div className="ease-in duration-200 md:w-2/3 m-auto max-w-screen-md">

            <Header element={{content: project.name}}/>

            <div className="flex flex-col-reverse  lg:flex-row gap-5">
                <div
                    className="ease-in duration-200 m-auto backdrop-blur-lg p-6 shadow-2xl rounded-2xl border-gray-200 border border-double min-h-80">

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


function useHeadingsData() {
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
        const {innerText: title, id} = headingEl;

        headings.push({id, title});
    });
    return headings;
}


function TableOfContentsPane({headers}){
    return (<div
        className="w-auto text-nowrap sticky h-min top-8 bg-gray-100  p-4 shadow-2xl rounded-2xl border-gray-200 border border-double">
        <TableOfContents headingData={headers}/>
    </div>)
}