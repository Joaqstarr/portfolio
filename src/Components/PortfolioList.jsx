import PortfolioListBlock from "./PortfolioListBlock";

export default function PortfolioList() {
    return (
        <div className="flex flex-row gap-4 w-full">
            <PortfolioListBlock/>
            <PortfolioListBlock/>
            <PortfolioListBlock/>
            <PortfolioListBlock/>

        </div>
    )
}