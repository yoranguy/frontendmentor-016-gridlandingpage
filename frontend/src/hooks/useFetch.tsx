import { useEffect, useState } from "react";

const useFetch = (<T,>(url: string) => {

    const [data, setData] = useState<T | null>(null);
    const [isLoading, setLoading] = useState(true); // For notifying the user that the data is loading.
    const [error, setError] = useState<string | null>(null); // For notifying the user that there is and error with the data.

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLoading(true);
        setError(null);

        
        const abortCont = new AbortController();
        
        fetch(url, {signal: abortCont.signal})
            .then(response => {
                if (!response.ok) {
                    throw Error("useFetch.tsx: json file error. response.states:" + response.status);
                }
                return response.json();

            }).then(JSONData => {
                setLoading(false);
                setError(null);
                setData(JSONData);
                
                console.log('useFetch.tsx: json loaded');
            }

            )
            .catch((err) => {
                if (err.name === 'AbortError') {
                    console.log('useFetch.tsx: Fetch aborted cleanly');
                    return; 
                }

                setLoading(false);
                setError(err.message);
                console.error('useFetch.tsx: Error loading data: ', err)
            });

            //Testing purposes 
            // console.log("useFetch.tsx/data: " + JSON.stringify(data));

            return () => abortCont.abort(); // Abort the fetch
    }, [url]);

    console.log(`useFetch.tsx: Data Loaded? ${data?true:false}`)
    return { data, isLoading, error }
}
)

export default useFetch;