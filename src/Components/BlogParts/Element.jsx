import Header from "./Header";
import Paragraph from "./Paragraph";
import Subtitle from "./Subtitle";
import Image from "./Image";
import Video from "./Video";
import ProjectTime from "./ProjectTime";

export default function Element(params){
    switch (params.element.type){
        case "head":
            return (<Header element={params.element}/>);
        case "paragraph":
            return (<Paragraph element={params.element}/>);
        case "image":
            return (<Image element={params.element}/>);
        case "subtitle":
            return (<Subtitle element={params.element}/>);
        case "video":
            return (<Video element={params.element}/>);
        case "time":
            return (<ProjectTime element={params.element}/>);

    }
}