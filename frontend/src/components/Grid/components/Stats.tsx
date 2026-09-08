
export interface StatsProps{
    id: string,
    icon: string,
    value: string,
    stats_name: string,
    stats_description: string
}

const Stats = (props: StatsProps) => {
    return ( 
        <>
            <div className="flex flex-col gap-[30px] justify-between items-start px-[30px] py-[25px] h-[330px] border-b-1 border-[var(--blue-400)]">
                <div className="flex flex-row justify-between items-center align-middle w-[100%]">
                    <img src={props.icon} alt="" />
                    <h1 className="text-4xl font-500">
                        {props.value}
                    </h1>
                </div>
                <div className="flex flex-col justify-start items-start text-center w-[100%] ">
                    <p className="text-paragraph">{props.stats_name}</p>
                    <p className="text-nav">{props.stats_description}</p>
                </div>
            </div>
        </>
    );
}

export default Stats;