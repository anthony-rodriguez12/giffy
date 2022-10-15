import {useEffect, useState} from 'react'
import getGifs from '../Services/API_URL'

export function useGifs({ keyword } = {keyword: null }) {
   const [loading, setLoading] = useState(false)
   const [gifs, setGifs] = useState([])
   
   useEffect(function () {
      setLoading(true)
      // recuperamos el localStorage
      const keywordToUse = keyword ? keyword : localStorage.getItem('lastKeyword')

      getGifs({ keyword: keywordToUse })
      .then(gifs => {
         setGifs(gifs)
         setLoading(false)
         // guardamos la keyword en el LocalStorage
         localStorage.setItem('lastKeyword',keyword)
      })
   }, [keyword])

   return {loading, gifs}
}

