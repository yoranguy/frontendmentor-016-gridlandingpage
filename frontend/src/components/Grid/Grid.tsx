import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Stats, { type StatsProps } from "./components/Stats";
import './Grid.css'

export interface GridProps {
    company_id: string;
    company_name: string;
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

        
        <div>
            <Nav company_name={props.company_name} />
            <Header {...headerData} />
            {props.stats.map((stat: StatsProps, index: number) =>
            (
                <Stats  {...stat} key={index} />
            )
            )
            }
            <Footer footer={props.footer} />
        </div>
        

    );
}

export default Grid;