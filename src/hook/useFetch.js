import {React,useState,useEffect,useRef} from 'react';

export const useFetch = (url) => {
    const [data,setData] = useState(null);
    const[loading , setLoading] = useState(false);
    const[error,setError] = useState(null);
   
    useEffect(() =>{
        const controller = new AbortController();
        
        setLoading(true);
        const fetchData = async () =>{
            try{
                const response = await fetch(url, {signal:controller.signal});
                if(!response.ok){
                    throw new Error(response.statusText)
                }
                const json = await response.json()
                setLoading(false);
                setData(json);
                setError(null);
                
                
            }
            catch(err){
                if(err.name === "AbortError"){
                    console.log('The Fetch was aborted');
                }else{
                setLoading(false);
                setError(err.message);
                }
            }
           
            
        }
        
            fetchData();

            return ()=>{
                controller.abort();
            }
       
       
    },[url])

    return {data,loading,error}
};