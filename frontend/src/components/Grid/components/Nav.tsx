import { useState } from 'react';
import '../../../index.css'
import { Link } from 'react-router-dom';

export interface NavProps {
    company_name: string;
    menu_list: menuItemProps[];
}



export interface menuItemProps{
    label: string,
    url: string;
}

const Nav = ({company_name, menu_list} : NavProps) => {

    const [menu, setMenu] = useState(false);

    const handleClick = () => {
        if (menu == false) {
            setMenu(true);
            document.body.classList.add('overflow-hidden');
        }
        else {
            setMenu(false);
            document.body.classList.remove('overflow-hidden');
        }
        console.log(`menu: ${menu}`)
        console.log("menu_list: ", menu_list )
    }

return (
    <>
    
    <nav className="w-full">
        
        <div className='flex flex-row gap-1 justify-between items-center top-0 bg-blue-600 p-[25px] border-b border-[var(--blue-400)]'>
            {/* company_name */}
            <div className="flex flex-row justify-center items-center-safe text-nav">
                <p className="text-[1rem]">● <Link to="/">{company_name}</Link></p>
            </div>

            {/* menu */}
            <div className={`text-5xl ${menu ? 'menu-active' : 'menu-inactive'} transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-120`} onClick={() => {handleClick();}}>
                <img src="/src/assets/images/icon-menu.svg" className={`${menu ? 'hidden' : 'block'}`} />
                <img src="/src/assets/images/icon-close.svg" className={`${menu ? 'block pointer-events-auto' : 'hidden'}`} />
            </div>
        </div>

        {menu && 
        <div className={`${menu ? 'fixed' : 'hidden'} h-[100%] w-[100%] top-[75px] left-[0px] animate-[wiggle_1s_ease-in-out_infinite] grid grid-cols-[1fr] max-[1440px]:grid-rows-[auto_1fr] min-[1440px]:grid-cols-[70.5fr_27fr_0fr]`} >
            <div className="bg-[rgba(0,0,0,0.5)] max-[1440px]:hidden max-[1440px]:h-max"></div>
            
            <div className="relative top-[0px] bg-blue-600 ">
                <ul className="flex flex-col gap-[10px] justify-start items-center text-3xl min-[1440px]:text-4xl h-max min-[1440px]:items-end p-[45px]">

                    {menu_list.map( (item: menuItemProps, index: number) => (
                            <li key={index}>
                                {/* <a href={item.url} className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-120 hover:underline hover:underline-offset-6 hover: decoration-2">{item.label}</a> */}
                                <Link to={item.url} onClick={handleClick}>{item.label}</Link>
                            </li>)
                        )}
                    

                </ul>
            </div>
            
            <div className="bg-[rgba(0,0,0,0.5)] h-[100%] min-[1440px]:hidden"></div>
        </div>}

    </nav>
    </>
);
}

export default Nav;