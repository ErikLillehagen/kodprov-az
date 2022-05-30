import useFetch from "../../hooks/useFetch";
import { useNavigate, useParams} from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import {ShowProps} from "../../types/showProps";
import TvImage from "../../components/TvImage/TvImage";
import Navbar from "../../components/Navbar/Navbar";
import React, {Suspense, useState} from "react";
import EpisodeAccordion from "../../components/Accordion/EpisodeAccordion";
import {EpisodeProps} from "../../types/episodesProps";

import './Details.css'

const Details = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const {data, error} = useFetch<ShowProps>(`https://api.tvmaze.com/shows/${id}`);
  const {
    data: episodeData,
    error: episodeError
  } = useFetch<EpisodeProps[]>(`https://api.tvmaze.com/shows/${id}/episodes`);
  const [searchValue, setSearchValue] = useState('')
  const updateSearchValue = (val: string):void => {
    setSearchValue(val)
  }
  const handleClick = () => {
    if (searchValue == '') return
    navigate('/', {state: {redirectSearchValue: searchValue}})
  }
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleClick();
  }

  if (error) return <p>error :(</p>
  if (!data) return <Loading/>
  return (
    <Suspense fallback={<Loading/>}>
      <Navbar
        searchValue={searchValue}
        updateSearchValue={updateSearchValue}
        detailMode
        onClick={handleClick}
        onKeyPress={handleKeyPress}
      />
      <div className='details-container'>
        <TvImage url={data.image?.medium}/>
        <div className='details-info'>
          <h2 className='details-header'>{data.name}</h2>
          <h4>Rating: {data.rating.average || "n/a"}</h4>
          <div dangerouslySetInnerHTML={{__html: data.summary}}/>
        </div>
        <div className='details-genres'>
          {data.genres.map((genre, index) => <span key={index} className='genre-bubble'>{genre}</span>)}
        </div>
        <div className='details-extra-info'>
          <p>Status: {data.status}</p>
          <p>Type: {data.type}</p>
          <p>Language: {data.language}</p>
          {data.runtime && <p>Runtime: {data.runtime}</p>}
          <p>Premiered: {data.premiered}</p>
          {data.ended ? <p>Ended: {data.ended}</p> :
            <p>Airing: {data.schedule.days.join(", ") || 'unknown day'} at {data.schedule.time || 'unknown time'}</p>}
        </div>
        <div className='episodes'>
          {episodeData && <EpisodeAccordion title='Episodes' episodes={episodeData} />}
        </div>
      </div>
    </Suspense>
  )
}

export default Details

