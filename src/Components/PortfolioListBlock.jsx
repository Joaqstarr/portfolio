export default function PortfolioListBlock() {

    let imagePath = "https://149455152.v2.pressablecdn.com/wp-content/uploads/2017/03/botw-featured.jpg";
    return (
        <div className="group rounded grow shrink w-full lg:w-1/3 h-52 flex flex-col lg:flex-row justify-between
        bg-gradient-to-r from-cyan-500 to-blue-500 ease-in duration-150 lg:hover:w-1/2 hover:h-64
        "
        style={{backgroundImage: `url(${imagePath})`,
        backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }}>
            <div className="flex flex-col justify-end w-fit  p-4">
                <p className="text-5xl text-slate-50 drop-shadow-2xl font-bold">
                    Game Name
                </p>
                <div className="flex flex-row">
                    <Tag name="C#"/>
                </div>
            </div>

            <div className="flex flex-col p-4 justify-end sm:w-full lg:w-fit lg:opacity-0 bg-gradient-to-b lg:bg-gradient-to-r from-transparent to-slate-600/50 to-30% group-hover:opacity-100 ease-in duration-200">
                <p className="text-slate-50">Info about the game here :DD.</p>
            </div>
        </div>
    )
}


function Tag(props){
    return(
        <div className="bg-blue-800 text-blue-100 rounded-xl p-1 text-sm">
            {props.name}
        </div>
    )
}