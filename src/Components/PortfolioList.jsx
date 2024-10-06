import PortfolioListBlock from "./PortfolioListBlock";
import PortfolioListRow from "./PortfolioListRow";
import React, { useState } from 'react';

export default function PortfolioList(params) {

    const groupedItems = params.projects.reduce((result, value, index, array) => {
        if (index % 2 === 0) {
            result.push(array.slice(index, index + 2));
        }
        return result;
    }, []);

    return (
        <div className="flex flex-col  w-full flex-nowrap gap-4 min-h-screen p-8">
            {groupedItems.map((pair, idx) => (
                <PortfolioListRow key={idx}>
                    {pair.map((item, subIdx) => (
                        <PortfolioListBlock key={subIdx} project={item}/>
                    ))}
                </PortfolioListRow>
            ))}
        </div>
    )
}