import { useContext } from 'react'
import StaticContext from '../../Context/StaticContext'
import GifsContext from '../../Context/GifsContext'

export default function Detail({ params }) {
   const staticConfig = useContext(StaticContext)
   console.log(staticConfig)

   const gifsContext = useContext(GifsContext)
   console.log(gifsContext)
   //   console.log(params.id)
   return <h1>Gif con id {params.id}</h1>
}