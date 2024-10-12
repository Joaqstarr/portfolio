export default function Video(params) {
    return (
    <video className="mb-7 rounded-xl mx-auto" controls>
        <source src={params.element.content} type="video/webm"/>
    </video>
)
}