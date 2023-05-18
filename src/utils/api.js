import axios from "axios";

// base url variable
const BASE_URl="https://api.themoviedb.org/3";

// second variable for token
const TMDB_TOKEN="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjN2QyMDVjYzg1MmQ0NTI1YzgzYjlhOGZlOWUwNTM5MCIsInN1YiI6IjY0NjFlNWM4ZGJiYjQyMDBlMjJkODJmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.POuxwDcHu9iM3KwTpDKP_DmqXE_zwGySx_k7O2HQW1k";

//for passing variable to the headers
const headers={
    Authorization:"bearer "+TMDB_TOKEN,
};

//method(async)
export const fetchDataFromApi = async(url, params)=>{
    try{
        const{data}=await axios.get(BASE_URl + url,{     // whatever response we get from axios.get gets stored in data key, which we destructured, and returned that data
            headers,
            params
        })
        return data;
    }catch(err){
        console.log(err)
    }
}