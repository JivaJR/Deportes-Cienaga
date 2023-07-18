import { useEffect, useState } from "react";

export const useFetchGifs = (category) => {

    const [images, setimages] = useState([]);
    const [isLoading,setIsLoading] = useState(true);

    const getImages = async() =>{
        const newImages = await getGifs( category );
        setimages(newImages);
        setIsLoading(false);
    }

    useEffect( () =>{
        getImages();
    }, []);

    return {
        images,
        isLoading
    }
}
