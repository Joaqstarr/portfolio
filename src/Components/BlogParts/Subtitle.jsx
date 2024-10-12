export default function Subtitle(params) {
    return(
        <p className="text-3xl font-bold mb-7"  dangerouslySetInnerHTML={{__html: params.element.content}}></p>
    )
}