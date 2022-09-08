import React,{useEffect, useState} from 'react';
import Search from './Search';
import token from '../util/token';
import Artist from './Artist';


const URL = "https:api.spotify.com";

const apiHeaders = new Headers();
apiHeaders.append('Authorization' , token.id);

const reqestOptions = {
    method: "GET",
    headers : apiHeaders,
    redirect : 'follow'
}

function Music() {

    const [artist , setArtist] = useState([])

      const searchHandler =  (artistName) => {
         fetch(`${URL}/v1/search?q=${artistName}&type=artist`, reqestOptions)
        .then(res => res.json())
        .then(data => {
            console.log('artists', data)
            setArtist(data.artists.items)
        } ).catch(err => console.log(err.message))
     }

    useEffect(() => {
        searchHandler('Ilayaraja')
    },[])



  return (
   <div className="container">
    <div className="row">
        <div className="col-md-12 text-center">
            <h5 className="display-3">Spotify Player</h5>
        </div>
    </div>
    <Search artistSearch={searchHandler}/>
    <Artist artistInfo={artist} pageCount= {6}/>
   </div>
  )
}

export default Music