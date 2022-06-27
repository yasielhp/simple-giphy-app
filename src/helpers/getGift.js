  export const getGifs = async( category) => {
    const API_KEY = '9X5cluS7HqhTgKzmuzCQNDtc54Q9sL0i'
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=12`
    const resp = await fetch(url)
    const { data } = await resp.json()

    const gifs = data.map(img => ({
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
    }))
    return gifs
  }
