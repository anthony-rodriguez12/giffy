import { Link } from 'wouter'
import './Gifs.css'


export default function Gifs({ title, id, url }) {
   return (
   <div className='Gif'>
      <Link to={`/gif/${id}`} className="Gif-link">
         <h4>{title}</h4>
         <img src={url} alt={title} />
      </Link>
   </div>
   )
}