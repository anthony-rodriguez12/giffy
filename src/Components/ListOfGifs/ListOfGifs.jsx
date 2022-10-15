import Gifs from "../Gif/Gifs";
import { useEffect, useState } from 'react'
import getGifs from '../../Services/API_URL'

export default function ListOfGifs({params}) {

   const { keyword } = params;
   const [gifs, setGifs] = useState([]);

   useEffect(function () {
      getGifs({ keyword })
         .then((gifs) => setGifs(gifs));
   }, [keyword]);

   return <div> 
      { gifs.map(({ id, title, url }) =>  
      <Gifs 
         key={id} 
         id={id} 
         title={title} 
         url={url} />  
      )}
      </div>
}
