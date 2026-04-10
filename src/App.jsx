import { useEffect, useState } from "react"
import Background from "./assets/Components/Background/background";
import Navbar from "./assets/Components/Navbar/navbar";
import Hero from "./assets/Components/Hero/hero";

 
 const App=() => {
  let heroData=[
    {test1:"dive into",test2:"what you love"},
    {test1:"Indulge",test2:"your passions"},
    {test1:"Give in to",test2:" your passions"}
  ]

  const [heroCount,setHeroCount]=useState(2);
  const [playStatus,setPlayStatus]=useState(false);

useEffect(()=>{
  setInterval(()=>{
    setHeroCount((count)=>{return count===2?0:count+1})
  },3000);
},[])


  return(
    <div>
  <Background playStatus={playStatus} heroCount={heroCount} />
  <Navbar/>
  <Hero
    setPlayStatus={setPlayStatus}
    herodata={heroData[heroCount]}
    heroCount={heroCount}
    setHeroCount={setHeroCount}
    playStatus={playStatus}
  />
    </div>
  )
 }
 export default App 