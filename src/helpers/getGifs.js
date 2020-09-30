export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=bQqndn7qzYt1AGe1govPVYvIPRcVsPWS`;

  const respuesta = await fetch(url);
  const { data } = await respuesta.json();

  const gifs = data.map((item) => {
    return {
      id: item.id,
      title: item.title,
      url: item.images?.downsized_medium.url,
    };
  });

  return gifs;
};
