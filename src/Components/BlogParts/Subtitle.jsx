export default function Subtitle(params) {
    return(
        <h2 className="text-3xl font-bold mb-7 scroll-mt-48 lg:scroll-mt-5" id={CreateIdName(params.element.content)}  dangerouslySetInnerHTML={{__html: params.element.content}}></h2>
    )
}

function CreateIdName(text){
    const replacedSpace = text.replace(/\s+/g, '-');
    return replacedSpace;
}