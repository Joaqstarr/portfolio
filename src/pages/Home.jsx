import TitleBar from "../Components/TitleBar";
import PortfolioList from "../Components/PortfolioList";

export default function Home() {
    return (
        <div>
            <TitleBar />
            {/**/}
            <div className="ease-in duration-200 md:w-2/3 m-auto">
                <PortfolioList/>

            </div>
        </div>
    )
}