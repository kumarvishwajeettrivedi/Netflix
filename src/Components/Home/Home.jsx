import React, { useEffect, useState } from 'react';
import "./Home.scss";
import { BiPlay } from "react-icons/bi"
import { AiOutlinePlus } from "react-icons/ai"

import axios from "axios";

const apikey="5b019cc39128568389e1192acd12f126";
const url="https://api.themoviedb.org/3/discover/movie";
const tvUrl="https://api.themoviedb.org/3/discover/tv";
const topUrl="https://api.themoviedb.org/3/movie/top_rated"
const imgurl="https://image.tmdb.org/t/p/original";


const Card = ({ imge }) => {
  return (

  <img className="card" src={imge} alt="card" />
  );
}

const Row = ({ Title,arr=[]}) => {
  return (
    <div className="row">
      <h1>{Title}</h1>
      <div className='innerrow'>
        {
          arr.map((item,index) => (
          <Card key={index} imge={`${imgurl}/${item.poster_path}`} />
        ))
      }
      </div>
    </div>
  );
}


const Home = () => {

const [upcomingmovies,setupcomingmovies]=useState();
const [upcomingTV,setupcomingTV]=useState();
const [upcomingTop,setupcomingTop]=useState();
//for moovies
useEffect(()=>{
 const fetchmovies=async()=>{
   const {data:{results}}=await axios.get(`${url}?api_key=${apikey}&page=1`)
  setupcomingmovies(results);
 }

 fetchmovies()
},[])
///for tv show
useEffect(()=>{
  const fetchTV=async()=>{
    const {data:{results}}=await axios.get(`${tvUrl}?api_key=${apikey}&page=2`)
   setupcomingTV(results);
  }
 
  fetchTV()
 },[])
//for top _show
useEffect(()=>{
  const fetchTop=async()=>{
    const {data:{results}}=await axios.get(`${topUrl}?api_key=${apikey}`)
   setupcomingTop(results);
  }
 
  fetchTop()
 },[])




  return (
    <section className='home'>
    <div className='banner' style={{
      backgroundImage: upcomingmovies && upcomingmovies[0] ? `url(${`${imgurl}/${upcomingmovies[0].poster_path}`})` : ''
    }}>
      {upcomingmovies && upcomingmovies[0] && (
        <>
          <h1>{upcomingmovies[0].original_title}</h1>
          <p>{upcomingmovies[0].overview}</p>
        </>
      )}

      <div>
        <button><BiPlay /> Play  </button>
        <button>My List <AiOutlinePlus /> </button>
      </div>
    </div>
    <Row Title={"Popular on Netflix"} arr={upcomingmovies} />
    <Row Title={"TV Show"} arr={upcomingTV} />
    <Row Title={"Top Movies"} arr={upcomingTop} />
  </section>
  );
}

export default Home;
//<img src={`${imgurl}/${upcomingmovies[0].poster_path}`} alt='con'/>
