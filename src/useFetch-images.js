import { useState, useEffect, useRef } from 'react'

export const useFetch = (url) => {
    const [images, setImages] = useState([]);
    const img = [];
    

    const getImages = async () => {
        const response = await fetch(url);
        const images = await response.json();
        images.map((image) => {
            if(image.id <= 5){
                img.push(image);
            }
        });
        setImages(img);
    }

    // const rerender = useRef(false);

    useEffect(() => {
            getImages();
        return () => {
            // rerender.current = true;
        };

    }, [url]);

    return {images};
};

