import React from "react";


const randomNumber = () => Math.floor(Math.random() * 122) + 1;

const RandomFox =(): JSX.Element =>{

    const imagen=`https://randomfox.ca/images/${randomNumber()}.jpg`;

    return(
        <img width={320}
         height='auto'
         className="mx-auto rounded-md bg-gray-300"
         src={imagen}/> 
    )
}
export default RandomFox;