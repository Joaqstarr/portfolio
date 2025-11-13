import {VideoBackground} from "./VideoBackground";
import PortfolioListRow from "./PortfolioListRow";
import PortfolioListBlock from "./PortfolioListBlock";
import EmptyPortofolioBlock from "./EmptyPortfolioBlock";
import React from "react";

function TitleBar(params){
    const handleClick = (page) => {
        window.location.href = 'projects/'+ConvertNameToUrlSafe(page);
    }
    return(
        <VideoBackground>
            <div
                className="w-full h-screen flex flex-col items-center sticky backdrop-blur-sm bg-blue-950 bg-opacity-30">

                <div className="flex-grow flex flex-col items-center justify-center">
                    <h1 className="text-8xl text-blue-100 mb-6 md:mb-3 text-center font-bold text-shadow-lg">Joaquin
                        Royer</h1>
                    <h2 className="text-4xl text-blue-100 text-center text-shadow-lg">Gameplay Programmer</h2>
                </div>

                <div className="mb-8">
                    <h2 className="text-4xl text-blue-100 text-left text-shadow-lg mb-1">Featured Projects</h2>
                    <div className="border-blue-100 border-2 rounded mb-1 p-1">
                        <PortfolioListRow key={0}>
                            <PortfolioListBlock key={0} project={params.featured1} click={handleClick}/>
                            <PortfolioListBlock key={1} project={params.featured2} click={handleClick}/>
                        </PortfolioListRow>
                    </div>
                </div>

            </div>

        </VideoBackground>
    )
}

export default TitleBar;

function ConvertNameToUrlSafe(name){
    let noSpace = name.replaceAll(" ", "");
    return noSpace.replaceAll(":", "");
}