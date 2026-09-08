
export interface StatsProps{
    id: string,
    icon: string,
    value: string,
    stats_name: string,
    stats_description: string,
    index: number
}

const Stats = (props: StatsProps) => {
    
    return ( 
        <> 
            <article id={String(props.index)} className={`flex flex-col gap-[30px] justify-between items-start px-[30px] py-[25px] h-[330px] min-[1440px]:h-auto border-b-1 border-[var(--blue-400)] hover:bg-[#ffffff20] ${(props.index % 2) === 0 ? 'min-[375px]:border-r-1' : '' } `}>
                <div className="flex flex-row justify-between items-center align-middle w-[100%]">
                    <img src={props.icon} alt="" />
                    <h1 className="text-4xl font-500">
                        {props.value}
                    </h1>
                </div>
                <div className="flex flex-col justify-start items-start text-start w-[100%] ">
                    <p className="text-paragraph">{props.stats_name}</p>
                    <p className="text-nav">{props.stats_description}</p>
                </div>
            </article>
        </>
    );
}

export default Stats;