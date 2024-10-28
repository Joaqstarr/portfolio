import {VideoBackground} from "./VideoBackground";

function TitleBar(){
    return(
            <VideoBackground>
                <div className="w-full h-screen flex flex-col items-center justify-center sticky backdrop-blur-sm bg-blue-400 bg-opacity-20">
                    <h1 className="text-8xl text-blue-100 mb-6 md:mb-3 text-center font-bold text-shadow-lg">Joaquin Royer</h1>
                    <h2 className="text-4xl text-blue-100 text-center text-shadow-lg">Gameplay Programmer</h2>
                </div>
            </VideoBackground>
    )
}

export default TitleBar;