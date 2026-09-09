// import { useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import type { GridProps } from './components/Grid/Grid'

import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Grid/components/Nav';
import FrontPage from './components/Grid/FrontPage';
import Footer from './components/Grid/components/Footer';
import Donate from './pages/Donate';
import OurWork from './pages/OurWork';
import AnnualReport from './pages/AnnualReport';
import Partners from './pages/Partners';
import About from './pages/About';



function App() {
  // const [count, setCount] = useState(0)

  const dataURL = "/data/data.json";
  const { data, isLoading, error }: { data: GridProps[] | null; isLoading: boolean | null; error: string | null } =
    useFetch(dataURL);
  const test = true;
  const useData = true;

  return (
    <Router>
      <div className="w-full bg-blue-600 text-white font-(--font-family)">
        <>
          {useData && console.log("App.tsx/JSON.stringify: " + JSON.stringify(data))}
          {test && isLoading && <div>Data is loading...</div>}
          {test && error && <div>Error: ${error}</div>}

          {data && data.map((component: GridProps) => {

            return (

              <div className="w-full min-h-screen flex flex-col min-[375px]:grid min-[375px]:grid-rows-1 min-[1440px]:grid-rows-[auto_1fr_auto]">

                <div className="w-full">
                  <Nav menu_list={component.menu_list} company_name={component.company_name} />
                </div>

                <Routes>
                  <Route path="/" element={<FrontPage {...component} />} />
                  <Route path="/annualreport" element={<AnnualReport />} />
                  <Route path="/ourwork" element={<OurWork />} />
                  <Route path="/partners" element={<Partners />} />
                  <Route path="/donate" element={<Donate />} />
                  <Route path="/about" element={<About />} />
                </Routes>

                <div className="">
                  <Footer footer={component.footer} />
                </div>

              </div>
              // <Home {...component} key={component.company_id}/>

            )
          })
          }

        </>
      </div>

    </Router>

  )
};

export default App
