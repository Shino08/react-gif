import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGif";


export const useFetchGif = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setisLoading] = useState(true)

    const getImages = async () => {
        const newImages = await getGif(category);
        setImages(newImages);
        setisLoading(false) 
    }

    useEffect( () => {
        getImages();
    }, [category])

    return {
        images,
        isLoading
    }
}
