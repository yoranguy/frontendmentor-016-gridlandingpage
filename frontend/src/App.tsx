// import { useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import type { GridProps } from './components/Grid/Grid'
import Grid from './components/Grid/Grid';

function App() {
  // const [count, setCount] = useState(0)

  const dataURL = "/data/data.json";
  const { data, isLoading, error }: { data: GridProps[] | null; isLoading: boolean | null; error: string | null } =
    useFetch(dataURL);
  const test = true;
  const useData = true;

  return (
    
    <div className="w-[100%] bg-blue-600 text-white font-[var(--font-family)]">
      <>
        {useData &&
          console.log("App.tsx/JSON.stringify: " + JSON.stringify(data))}

        {test && isLoading && <div>Data is loading...</div>}
        {test && error && <div>Error: ${error}</div>}

        {data &&
          data.map((component: GridProps) => {
            return <Grid {...component}  key={component.company_id}  />;
          })}
      </>
    </div>
    
  )
}

export default App
