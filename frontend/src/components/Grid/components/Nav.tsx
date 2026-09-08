import { useState } from 'react';
import '../../../index.css'

export interface NavProps {
    company_name: string;
}

const Nav = (props: NavProps) => {

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
    }

return (
    <>
    <div className="p-[25px]">&nbsp;</div>
    <nav className="w-full">
        <div className="static h-full">
            <div className='flex flex-row gap-1 justify-between items-center fixed top-0 w-full bg-blue-600 p-[25px] border-b border-[var(--blue-400)]'>
                {/* company_name */}
                <div className="text-nav">
                    •  {props.company_name}
                </div>

                {/* menu */}
                <div className={`text-5xl ${menu ? 'menu-active' : 'menu-inactive'} `} onClick={() => {handleClick();}}>
                    <img src="/src/assets/images/icon-menu.svg" className={`${menu ? 'hidden' : 'block'}`} />
                    <img src="/src/assets/images/icon-close.svg" className={`${menu ? 'block pointer-events-auto' : 'hidden'}`} />
                </div>
            </div>
        </div>

        <div className={`${menu ? 'fixed' : 'hidden'} h-[100%] w-[100%] top-[75px] left-[0px] bg-[rgba(0,0,0,0.5)]`}>
            <div className="relative top-[0px] bg-blue-600 pt-[45px] pb-[45px]">
                <ul className="flex flex-col gap-[10px] justify-center items-center text-3xl">
                    <li>About</li>
                    <li>Our Work</li>
                    <li>Partners</li>
                    <li>Annual Report</li>
                    <li>Donate</li>
                </ul>
            </div>
        </div>
    </nav>
    </>
);
}

export default Nav;