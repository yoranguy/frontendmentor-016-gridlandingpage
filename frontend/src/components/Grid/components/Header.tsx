export interface HeaderProps{
    hero: string,
    description: string
}

const Header = (props: HeaderProps) => {
    return ( 
        <div className="flex flex-col gap-[30px] justify-center items-center h-[340px] p-[30px] border-b-1 border-[var(--blue-400)] ">
            {/* Hero */}
            <h1 className="text-[36pt] font-400 tracking-tighter leading-[50px]">
               {props.hero}
            </h1>
            {/* Description */}
            <p className="text-paragraph">
                {props.description}
            </p>
        </div>
    );
}
 
export default Header;