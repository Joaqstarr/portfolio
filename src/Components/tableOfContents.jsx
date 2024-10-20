import {useEffect, useState} from "react";

export default function TableOfContents(props) {

    return (<nav aria-label="Table of contents" className="sticky overflow-auto ">
        <h3 className="font-bold text-lg">Table of Contents</h3>
        {(props.headingData.length > 0 ) &&
            (<Headings headings={props.headingData}/>)}
    </nav>);
}

function Headings({headings}){
    const [headingFiltered, setHeadingFiltered] = useState([]);

    useEffect(()=>{
        const newArr = headings.filter((element) => IsValid(element.id));
        setHeadingFiltered(newArr);
        //console.log("new arr: " + JSON.stringify(newArr) + ", " + JSON.stringify(headings));

    }, [headings])

    const handleLinkClick = (e, id) => {
        e.preventDefault();
        document.querySelector(`#${id}`).scrollIntoView({
            behavior: "smooth"
        });
    }
    return (
        <>
        {(headings.length > 0) &&
        (<ul className="list-disc list-inside ">
        {headingFiltered.map((heading) => (heading.id.length !== "") && (
            <li key={heading.id}>
                <a href={`#${heading.id}`} onClick={(e) => {
                    handleLinkClick(e, heading.id)
                }}>{heading.title}</a>
            </li>
        ))}
    </ul>)
    }</>
    );
}


function IsValid(str){
    return str !== null && str !== undefined && str !== "" && str.length > 0;
}