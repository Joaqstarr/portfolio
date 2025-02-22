﻿import {useEffect, useState} from "react";

export default function Subtitle(params) {
    const [id, setId] = useState("");

    useEffect( () => {
        setId(CreateIdName(params.element.content));
    }, [params.element.content]);
    return(
        <h2 className="text-3xl font-bold mb-7 scroll-mt-7 lg:scroll-mt-5 " id={id}  dangerouslySetInnerHTML={{__html: params.element.content}}></h2>
    )
}

export function CreateIdName(text){
    const text2 = text.replace(/\s+/g, '-');
    return text2.replaceAll(".", "");
}