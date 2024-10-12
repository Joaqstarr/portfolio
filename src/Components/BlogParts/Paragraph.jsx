export default function Paragraph(params) {
    return(
        <p className="mb-7 text-slate-900" dangerouslySetInnerHTML={{__html: params.element.content}}></p>
    )
}