 import "./background.css"
 import video1 from "../../video1.mp4?url"
 import image1 from "../../image1.png"
 import image2 from "../../image2.png"
 import image3 from "../../image3.png"
 import { useRef, useEffect } from "react"

 const Background=({playStatus,heroCount})=>{
    const videoRef = useRef(null);

    useEffect(() => {
        if (playStatus && videoRef.current) {
            videoRef.current.play();
        }
    }, [playStatus]);

    if(playStatus){
        return(
            <video ref={videoRef} className='background fade-in'autoPlay loop muted> 
            <source src={video1} type="video/mp4"/>

            </video>
        )
        
    }
    else if(heroCount===0)
    {
        return <img src={image1} className="background fade-in"></img>
    }
     else if(heroCount===1)
    {
        return <img src={image2} className="background fade-in"></img>
    }
     else if(heroCount===2)
    {
        return <img src={image3} className="background fade-in"></img>
    }
 }

 export default Background