import './Result.css'
import {Link} from "react-router-dom";
import TvImage from "../TvImage/TvImage";
import {SearchResultProps} from "../../types/showProps";
import React from "react";

const Result: React.FC<SearchResultProps> = ({show, score}: SearchResultProps) => (
  <Link to={`/show/${show.id}`}>
    <div className='result-container'>
      <TvImage url={show.image?.medium}/>
      <div className='result-info'>
        <h2 className='result-header'>{show.name}</h2>
        <h4>Rating: {show.rating.average || "n/a"}</h4>
        {/*Silly API giving me summary as html*/}
        <div dangerouslySetInnerHTML={{__html: show.summary}}/>
      </div>
    </div>
  </Link>
);

export default Result