const apiKey = "eIF3iAOnXEEjEuMbjKs9VmzrI9xKgCY1";

export default function getGifs({ keyword = "Goku+Transformaciones", limit = 10  } = {}) {
const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=${limit}&offset=0&rating=g&lang=es`;

return fetch(apiURL)
   .then((res) => res.json())
   .then((response) => {
   const { data = [] } = response;
   if (Array.isArray(data)) {
      const gifs = data.map((imagen) => {
         const { images, title, id } = imagen;
         const { url } = images.fixed_width;
         return { title, id, url };
      });
      return gifs;
   }
   });
}
