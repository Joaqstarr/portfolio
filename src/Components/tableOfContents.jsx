export default function TableOfContents(props) {

    return (<nav aria-label="Table of contents" className="sticky overflow-auto ">
        <h3 className="font-bold text-lg">Table of Contents</h3>
        <Headings headings={props.headingData}/>
    </nav>);
}

function Headings({headings}){
    const handleLinkClick = (e, id) => {
        e.preventDefault();
        document.querySelector(`#${id}`).scrollIntoView({
            behavior: "smooth"
        });
    }
    return (
        <ul className="list-disc list-inside ">
            {headings.map((heading) => (
                <li key={heading.id}>
                    <a href={`#${heading.id}`} onClick={(e) =>{handleLinkClick(e, heading.id)}}>{heading.title}</a>
                </li>
            ))}
        </ul>
    );
}

