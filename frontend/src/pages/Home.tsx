import Footer from "../components/Grid/components/Footer";
import Nav from "../components/Grid/components/Navigation";
import FrontPage, { type CompanyProps } from "../components/Grid/FrontPage";


const Home = (props: CompanyProps) => {
    return (
        <div className="w-full h-full flex flex-col min-[375px]:grid min-[375px]:grid-rows-1 min-[1440px]:grid-rows-[auto_1fr_auto]">
            <div className="w-full">
                <Nav menu_list={props.menu_list} company_name={props.company_name} />
            </div>

            <FrontPage {...props} />

            <div className="">
                <Footer footer={props.footer} />
            </div>

        </div>
    );
}

export default Home;