import './Gifs.css'

export default function Gifs({title,url,id}) {
   return (<a href={`#${id}`} className='Gif'>
      <h4>{title}</h4>
      <img src={url} alt={title} />
      <small>{id}</small>
   </a>
   )
}