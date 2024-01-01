import axios from "axios"
import { resolveModuleName } from "typescript"

const baseURL:string = 'https://www.omdbapi.com/'

export default async function search(query:string) {

  const params:object = {
    s: query,
    type: 'movie',
    apikey: 16557923,
  }

  const response = await axios({
    baseURL: baseURL,
    params: params,
  })

  console.log(response)

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


export async function getMovie(id) {
  /* Fetch movie Details form baseURL 
   and transform the response into 
   different structure */

  const params = {
    apikey: 16557923,
    i: id,
    plot: 'full'
  }

  const response = await axios({
    baseURL: baseURL ,
    params: params
  })


  return transformMovie(response.data)

}

const transformMovie = (data:object) => ({
    poster: data['Poster'],
    general: {
      title: data['Title'],
      type: data["Type"],
      genre: data['Genre'].split(','),
      infoButtons: {
        rated: data['Rated'] ,
        released: data['Released'] ,
        runtime: data['Runtime'],
      }
    },
    rating: {
      score: data['imdbRating'],
      votes: data['imdbVotes'],
    },

    story: data['Plot'],

    actors : data['Actors'].split(',')

  }) 

class NOT_FOUND extends Error {
  constructor(message:string) {
    super(message)
    this.name = "MOVIE NOT FOUND"
  }
}
