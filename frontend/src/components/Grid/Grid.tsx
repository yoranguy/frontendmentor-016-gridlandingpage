import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav, { type menuItemProps } from "./components/Nav";
import Stats, { type StatsProps } from "./components/Stats";
import './Grid.css'

export interface GridProps {
    company_id: string;
    company_name: string;
    menu_list: menuItemProps[];
    hero: string;
    description: string;
    stats: StatsProps[];
    footer: string[];
}

const Grid = (props: GridProps) => {

    const headerData = {
        hero: props.hero,
        description: props.description
    }

    
    
    return (

        
        <div className="w-full flex flex-col min-[375px]:grid min-[1440px]:h-dvh min-[375px]:grid-rows-1 min-[1440px]:grid-rows-[auto_1fr_auto]">
            <div className="w-full">
                <Nav menu_list={props.menu_list} company_name={props.company_name} />
            </div>

            <div className="min-[1440px]:grid min-[1440px]:grid-cols-[45fr_55fr]">
                <div className="w-full min-[1440px]:grid-col-2 min-[1440px]:flex min-[1440px]:grow">
                    <Header {...headerData} />
                </div>
                
                
                <main className="min-[375px]:grid min-[375px]:grid-cols-2  min-[1440px]:grid-cols-[auto_auto] min-[1440px]:grid-rows-[auto_auto]">
                    {props.stats.slice(0, 4).map((stat: StatsProps, index: number) =>
                            (
                                <Stats {...stat} key={index} index={index} />
                            )
                        )
                    }
                </main>
                
            </div>
            <div className="">
                <Footer footer={props.footer} />
            </div>

            
        </div>
        

    );
}

export default Grid;