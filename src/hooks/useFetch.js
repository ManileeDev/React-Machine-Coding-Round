import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading,setLoading] = useState(true);
    const [err,setErr] = useState(null)
    useEffect(()=>{
        const fetchData = async () => {
        setLoading(true)
        try{
            const response = await fetch(url)
            if(!response.ok){
                throw new Error("Error fetching data")
            }
            const result = await response.json()
            setData(result)
        }
        catch(err){
            setErr(err.message)
        }
        finally{
            setLoading(false)
        }
        }
        fetchData();
    },[url])
    return {data,loading,err}
}

export default useFetch;