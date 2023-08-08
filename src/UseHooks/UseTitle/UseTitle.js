import { useEffect } from "react";


const useTitle =(title)=>{
    useEffect(()=>{
        document.title= `${title}-Resell Market`
    },[title]);
}

export default useTitle;