import PortfolioListBlock from "./PortfolioListBlock";
import PortfolioListRow from "./PortfolioListRow";

export default function PortfolioList() {
    return (
        <div className="flex flex-col  w-full flex-nowrap gap-4 min-h-screen p-8">
            <PortfolioListRow>
                <PortfolioListBlock/>
                <PortfolioListBlock/>

            </PortfolioListRow>
            <PortfolioListRow>
                <PortfolioListBlock/>
                <PortfolioListBlock/>

            </PortfolioListRow>

        </div>
    )
}