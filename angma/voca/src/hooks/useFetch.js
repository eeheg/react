import { useEffect, useState } from "react";


export default function useFetch(url) {
    const [data,setData] = useState([]);

    console.log([data,setData]);

    useEffect(() => {
        fetch(url)
            .then(res => {
                return res.json()
            })
            .then(data => {
                setData(data);
            })
    }, [url]);
    
    return data;
}

