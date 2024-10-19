import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const FullScreenImage = React.memo(({src, alt, isVisible}) => {
    return (
        <div className={`w-screen h-screen fixed bg-gray-200 inset-0 flex-col bg-opacity-80 flex justify-center items-center transition-opacity duration-200 cursor-default p-4 md:p-16 lg:p-32 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none '}`}>

            <p className="mb-3 font-bold text-gray-900">{alt}</p>
            <img src={src} alt={alt} className={`max-w-full max-h-full w-full object-contain transition-transform duration-100 ease-in-out cursor-pointer ${isVisible ? 'scale-100' : 'scale-0'}`}></img>
        </div>

    )
});

export default function Image(params) {
    const [isFullScreen, setIsFullScreen] = useState(false);


    const toggleFullScreen = (e) => {
        e.stopPropagation();
        const prevState = isFullScreen;
        setIsFullScreen(prevState => !prevState);

    };

    return(
        <div onClick={toggleFullScreen}>
            {ReactDOM.createPortal(<FullScreenImage src={params.element.content} alt={params.element.alt} isVisible={isFullScreen}/>, document.body)
            }
            <img src={params.element.content} className="mb-7 mx-auto rounded-xl cursor-pointer" alt={params.element.alt}></img>
        </div>

    )
}