import {useEffect, useState} from "react";

export default function Subtitle(params) {
    const [id, setId] = useState("");

    useEffect( () => {
        setId(CreateIdName(params.element.content));
    }, [params.element.content]);
    return(
        <h2 className="text-3xl font-bold mb-7 scroll-mt-48 lg:scroll-mt-5" id={id}  dangerouslySetInnerHTML={{__html: params.element.content}}></h2>
    )
}

function CreateIdName(text){
    return text.replace(/\s+/g, '-');
}