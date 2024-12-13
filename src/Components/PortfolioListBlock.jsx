'use client'
import {useState, useEffect} from "react";
import path from "path";

export default function PortfolioListBlock(params) {
    const [name, setName] = useState("");
    const [tags, setTags] = useState([]);
    const [extraInfo, setExtraInfo] = useState("");

    const defaultStyling = {
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center"
    }
    const [thumbnailStyling, setThumbnailStyling] = useState(defaultStyling);

    useEffect(() => {
        setName(params.project.name);
        setTags(params.project.tags);
        setExtraInfo(params.project.extraInfo);

        let imagePath = params.project.thumbnail;
        let backgroundColor = params.project.backgroundColor;
        let highlightColor = params.project.highlightColor;

        let newStyling = {...defaultStyling};
        if(imagePath !== "" && imagePath != null){
            newStyling.backgroundImage = `url(${process.env.NEXT_PUBLIC_API_URL + "/" + imagePath})`;
        }
        if(backgroundColor !== "" && backgroundColor != null){
            newStyling.backgroundColor = backgroundColor;
        }
        if(highlightColor !== "" && highlightColor != null){
            newStyling.borderColor = highlightColor;
        }
        setThumbnailStyling(newStyling);

    }, [params.project.thumbnail, params.project.backgroundColor, params.project.highlightColor, params.project]);


    const handleClick = () => {
        params.click(params.project.name);
    }

    return (
        <div className="group overflow-hidden cursor-pointer shadow-2xl hover:shadow-[5]xl lg:hover:border-8 border-amber-800 rounded-xl grow shrink w-full lg:w-1/3 h-52 flex flex-col lg:flex-row justify-between
        bg-gradient-to-r from-cyan-500 to-blue-500 ease-in-out duration-150 lg:hover:w-1/2
        "
        style={thumbnailStyling} onClick={handleClick}>
            <div className="flex flex-col justify-end w-fit  p-4 group-hover:bg-gradient-to-r  group-hover:lg:bg-gradient-to-L to-transparent from-slate-600 ">
                <p className="text-5xl text-slate-50 drop-shadow-2xl font-bold mb-3 lg:max-w-24">
                    {name}
                </p>
                <div className="flex flex-row gap-1" >
                    {tags.map((tag, index)=>(
                    <Tag name={tag} key={index}/>
                ))}
                </div>
            </div>

            <div className=" flex flex-col p-4 lg:pr-0  items-end w-full lg:w-fit lg:opacity-0 bg-gradient-to-b lg:bg-gradient-to-r from-transparent to-slate-600/50 to-30% group-hover:opacity-100 ease-in duration-200">
                <p className=" w-full lg:max-w-72 text-slate-50 lg:w-2/3 text-pretty lg:opacity-0 group-hover:opacity-100 ease-in-out duration-300 min-w-32 lg:mr-3 lg:text-end" dangerouslySetInnerHTML={{__html:extraInfo}}></p>
            </div>
        </div>
    )
}


function Tag(props){
    return(
        <div className="bg-blue-800 text-blue-100 rounded-xl p-1 px-2 text-xs text-nowrap">
            {props.name}
        </div>
    )
}