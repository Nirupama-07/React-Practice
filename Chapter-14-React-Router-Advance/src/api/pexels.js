const API_KEY = import.meta.env.VITE_PEXELS_API_KEY;

export async function getEcoHouses() {
  const response = await fetch(
    "https://api.pexels.com/v1/search?query=eco house&per_page=6",
    {
      headers: {
        Authorization: API_KEY,
      },
    }
  );

  const data = await response.json();

  return data.photos;
}