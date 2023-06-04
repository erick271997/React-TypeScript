
import React from "react";

type Props={imagen: string}


const RandomFox =({imagen}:Props): JSX.Element =>{

   

    return(
        <img width={320}
         height='auto'
         className="mx-auto rounded-md bg-gray-300"
         src={imagen}/> 
    )
}
export default RandomFox;