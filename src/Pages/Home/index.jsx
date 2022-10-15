import { useState } from "react"
import { Link, useLocation } from "wouter"
import ListOfGifs from '../../Components/ListOfGifs'
import {useGifs} from '../../hooks/useGifs'

const POPULAR_GIFS = ["Goku","Vegeta","Gohan","Vegito","Gogeta","Trunks"]

export default function Home() {
   const [keyword,setKeyword] = useState('')
   const [path,pushLocation] = useLocation()

   const { loading, gifs } = useGifs() //CustomHook useGifs

   const handleSubmit = evt => {      
      console.log(keyword)
      evt.preventDefault()
      pushLocation(`/search/${keyword}`)
   }

   const handleChange = evt => {
      setKeyword(evt.target.value)
   }

   return (
      <>
         <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" id="" value={keyword} placeholder="Busca tus Gifs aqui..."/>
         </form>
         <h3 className="App-title">Ultima Busqueda</h3>
         <ListOfGifs gifs={gifs}/>
         <h3 className="App-title">Los gifs más populares</h3>
         <ul>
         {POPULAR_GIFS.map((popularGif) => (
            <li key={popularGif}>
               <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
            </li>
         ))}
         </ul>
      </>
   )
}