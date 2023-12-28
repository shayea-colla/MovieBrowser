import axios from "axios"
import { resolveModuleName } from "typescript"

const baseUrl:string = 'http://www.omdbapi.com/'


export default async function search(query:string) {
  const params:object = {
    s: query,
    type: 'movie',
    apikey: 16557923

  }

  const response = await axios({
    baseURL: baseUrl,
    params: params,
  })

  if (response.data['Response'] === "True") {
    return transformResponse(response.data)
  }

  throw new NOT_FOUND(`No results found for "${query}"`)
    
}



function transformResponse(data:object) {

  return data['Search'].map((movie:object) => ({
      source : movie['Poster'],
      movieTitle:movie['Title'],
      year: movie['Year'],
      id: movie['imdbID'],
      type: movie['Type'],

  }));
}

export async function searchById(id) {
  // Fetch movie Details form baseURL

  const parmas = {
    i: id,
  }

  const response = await axios({
    baseURL: baseURL ,
    params: params
  })

  return response

}

class NOT_FOUND extends Error {
  constructor(message:string) {
    super(message)
    this.name = "MOVIE NOT FOUND"
  }
}
