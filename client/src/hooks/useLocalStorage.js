import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValaue){
    const [value, setValue] = useState(()=>{
        const storage = localStorage.getItem(key)

        if(storage != null) return JSON.parse(storage)

        if(typeof storage === 'function'){
            return (initialValaue())
        }else{
            return initialValaue
        }
    })

    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue]
}