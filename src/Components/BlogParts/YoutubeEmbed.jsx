export default function YoutubeEmbed(params) {
    return (
        <div className="mb-7 mx-auto overflow-hidden rounded-xl aspect-video">
            <iframe
                className="w-full h-full"
                src={params.element.content}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        </div>
    );
}