
import { type } from "os";
import React, { useRef,useEffect, useState, ImgHTMLAttributes } from "react";
import '../estilo/Random.css'

type LazyImageProps={imagen: string}
type ImageNative= ImgHTMLAttributes<HTMLImageElement>;

type Props= LazyImageProps & ImageNative

const LazyImage =({imagen, ...imgProps}:Props): JSX.Element =>{
    const node= useRef<HTMLImageElement>(null)
    const[currentSrc, seTcurrentSrc]=useState(
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
    )

   //Nuevo observador
   useEffect(()=>{
    const observe=new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            if(entry.isIntersecting){
                seTcurrentSrc(currentSrc)
            }
        })
    })
    if(node.current){
        observe.observe(node.current)
    }
    //desconectar
    return()=>{
        observe.disconnect();
    }
   },[currentSrc])
    return(

        <img ref={node} 
         src={currentSrc} 
        {...imgProps}/> 
         
    );
}
export default LazyImage;