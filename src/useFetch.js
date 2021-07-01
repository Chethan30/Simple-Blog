import {useState, useEffect} from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setisPending] = useState(true);
    const [Error, setError] = useState(null)

    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, {signal: abortCont.signal })
            .then(res => {
                if(!res.ok) {
                    throw Error('Could not fetch data!');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setisPending(false);
                setError(null);
    
            })
            .catch(err => {
                if(err.name !=='AbortError'){
                    setError(err.message);
                    setisPending(false);
                }
                
            });

            return () => abortCont.abort();
        }, [url, Error]);

    return {data, isPending, Error};

}

export default useFetch;