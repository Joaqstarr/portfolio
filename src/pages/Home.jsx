import TitleBar from "../Components/TitleBar";
import PortfolioList from "../Components/PortfolioList";
import {GetAllGamesFromTable} from "../Postgress/Database";

export default function Home() {
    GetAllGamesFromTable();

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