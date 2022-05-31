import {EpisodeProps} from "../../types/episodesProps";
import TvImage from "../TvImage/TvImage";

import './Episode.css'
import React from "react";

interface EpisodeComponentProps {
  data: EpisodeProps
}

const Episode: React.FC<EpisodeComponentProps> = ({data}: EpisodeComponentProps) => {
  return (
    <div className="episode-container">
      <TvImage url={data.image?.medium}/>
      <div>
        <h4 className='episode-name'>{data.name} S:{data.season} E:{data.number}</h4>
        <p>Airdate: {data.airdate}</p>
        <div dangerouslySetInnerHTML={{__html: data.summary}}/>
      </div>
    </div>
  )
}

export default Episode