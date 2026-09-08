export interface HeaderProps{
    hero: string,
    description: string
}

const Header = (props: HeaderProps) => {
    return ( 
        <header className="w-full flex flex-col gap-[30px] justify-center items-center h-[340px] min-[1440px]:h-auto p-[30px] border-b-1 border-[var(--blue-400)] min-[1440px]:h-[100%] min-[1440px]:border-r-1">
            {/* Hero */}
            <h1 className="text-[36pt] font-400 tracking-tighter leading-[50px]">
               {props.hero}
            </h1>
            {/* Description */}
            <p className="text-paragraph">
                {props.description}
            </p>
        </header>
    );
}
 
export default Header;