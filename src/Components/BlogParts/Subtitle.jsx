export default function Subtitle(params) {
    return(
        <h2 className="text-3xl font-bold mb-7"  dangerouslySetInnerHTML={{__html: params.element.content}}></h2>
    )
}