import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import token from '../util/token'

const URL = "https:api.spotify.com";

const apiHeaders = new Headers();
apiHeaders.append('Authorization' , token.id);

const reqestOptions = {
    method: "GET",
    headers : apiHeaders,
    redirect : 'follow'
}



function Tracks() {

    const params = useParams()
    const [tracks, setTracks] = useState([])

    //Play state

  
const [audio, setAudio] = useState(null)
const [preUrl, setPreUrl] = useState(false)
const [playing, setPlaying] = useState(false)


    const getTracks = async () => {
    await fetch(`${URL}/v1/artists/${params.id}/top-tracks?market=IN`, reqestOptions)
    .then(res => res.json())
    .then(out => {
        console.log(`out=`,out)
        setTracks(out.tracks)
    }).catch(err => console.log(err.message))
    } 

    useEffect(() => {
    getTracks()
    },[])

    // tracksIcon

    const trackIcon = (url) =>  {
        if (!url) return <span className='text-danger'>No Tracks</span>
        if(playing && preUrl === url) return <span className="btn btn-sm btn-warning">Pause</span>
        return <span className="btn btn-sm btn-success">Play</span>
    }
 // play logic
    const playAudio = (url) => {
        let myAudio = new Audio(url);
        if(!playing) { 
            // first play
            myAudio.play();
            setPlaying(true);
             setAudio(myAudio);
             setPreUrl(url)
        }else {
            // pause
            audio.pause();
            if(preUrl === url){
                setPlaying(false);
            }else{
                // pause to play
                myAudio.play();
                setAudio(myAudio)
                  setPreUrl(url)
            }
        }
    }

  return (
   <div className="container">
    <div className="row">
        <div className="col-md-12 text-center">
            <h3 className="display-3 text-secondary">Tracks</h3>
            <p className="text-secondary">{params.id}</p>
            
        </div>
    </div>

    <div className="row">
       
            {
                tracks && tracks.map((item,index) => {
                    let{name, album, preview_url} = item;
                    return(
                        <div className="col-md-3 mt-2" key={index} >
                    <div className="card" onClick={() => {playAudio(preview_url)}}>
                    <img src={album.images[1].url} alt="AritstName" className='card-img-top'/>
                    <div className="card-body">
                        <h5 className="text-center">{name}</h5>
                    </div>
                   <div className="card-footer">
                    {trackIcon(preview_url)}</div> 
                    </div>
                    </div>
                    )
                })
            }
        
    </div>
   
   </div>
  )
}

export default Tracks


























// <div className="row">
// {
//     tracks && tracks.map((item,index) => {
//         const { name, album ,preview_url } = item;
//         return(
//             <div className="col-md-3 mt-2" key= {index}>
//                 <div className="card" onClick={() => {playAudio(preview_url)}}>
//                     <img src={album.images[2].url}  alt="name" className='card-img-top' />
//                     <div className="card-body">
//                         <h5 className="text-center">{name}</h5>
//                     </div>
//                     <div className="card-footer">
//                        { trackIcon(preview_url)} </div>
//                 </div>
//             </div>
//         )
//     })
// }
// </div>



