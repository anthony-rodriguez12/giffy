import Gifs from "./Gifs";
import { useEffect, useState } from 'react'
import getGifs from '../Services/API_URL'

export default function ListOfGifs({keyword}) {

   const [gifs, setGifs] = useState([]);

   useEffect(function () {
      getGifs({ keyword })
         .then((gifs) => setGifs(gifs));
   }, [keyword]); //eslint-disable-line

   return gifs.map(({ id, title, url }) => {
      return <Gifs key={id} id={id} title={title} url={url} />;
   });
}
