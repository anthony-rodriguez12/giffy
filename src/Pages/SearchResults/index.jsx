import {useEffect, useState} from 'react'
import Spinner from '../../Components/Spinner'
import ListOfGifs from '../../Components/ListOfGifs'
import getGifs from '../../Services/API_URL'

export default function SearchResults ({ params }) {
const { keyword } = params
const [loading, setLoading] = useState(false)
const [gifs, setGifs] = useState([])

useEffect(function () {
   setLoading(true)
   getGifs({ keyword })
   .then(gifs => {
      setGifs(gifs)
      setLoading(false)
   })
}, [keyword])

return <>
   {loading
   ? <Spinner />
   : <ListOfGifs gifs={gifs} />
   }
</>
}