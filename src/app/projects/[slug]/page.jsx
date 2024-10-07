'use client'

import Element from "../../../Components/BlogParts/Element"
import React, {useState, useEffect} from "react";

export default function Page(params){
    const [elements, setElements] = useState([]);

    const [slug, setSlug] = useState('');


    const ParseJson = async () =>{
        try{
            const response = await fetch('/ExampleBlog.json');

            if(!response.ok) throw new Error('Failed to fetch JSON');

            const data = await response.json();
            setElements(data.elements);
            console.log(data.elements);

        }catch(error){
            console.error("Error Fetching JSON: ", error);
        }

    }


    useEffect(() => {
        setSlug(params.params.slug)
        ParseJson();
    }, [params.params.slug]);
    console.log();
    return (
        <div>
            <h1>Slug: {slug}</h1>

            {elements != null ?
                elements.map((element, index) => (
                <Element key={index} element={element}/>
                )) : (<div>loading...</div>)}
        </div>
    );
}