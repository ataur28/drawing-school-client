import { useEffect } from "react"

const useTitle = title =>{
    useEffect(() =>{
        document.title = `${title} - Doll House`;
    }, [title])
}

export default useTitle;