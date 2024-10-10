
export default function PortfolioListRow(props) {
    return (
        <div className="flex flex-col flex-nowrap gap-4 justify-center items-center lg:flex-row hover:backdrop-blur">
            {props.children}

        </div>
    )
}