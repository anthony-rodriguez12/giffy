import Spinner from '../../Components/Spinner'
import ListOfGifs from '../../Components/ListOfGifs'
import {useGifs} from '../../hooks/useGifs'

export default function SearchResults ({ params }) {
const { keyword } = params
const { loading, gifs } = useGifs({keyword}) //CustomHook useGifs

return <>
   {loading
      ? <Spinner />
      : <ListOfGifs gifs={gifs} />
   }
</>
}