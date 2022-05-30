import React, {useState} from 'react';
import {EpisodeProps} from "../../types/episodesProps";
import Episode from "../Episode/Episode";

import './EpisodeAccordion.css'

interface AccordionProps {
  title: string
  episodes: EpisodeProps[]
}

const EpisodeAccordion = ({title, episodes}: AccordionProps) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <h2>{title}</h2>
        <h2 className='expand'>{isActive ? '-' : '+'}</h2>
      </div>
      {isActive &&
          <div className="accordion-content">
            {episodes.map((episode, index) => <Episode key={index} data={episode} />)}
          </div>
      }
    </div>
  );
};

export default EpisodeAccordion;