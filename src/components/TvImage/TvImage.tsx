import posterMissing from '../../assets/no-image-available.png'

import './Tvimage.css'
import React from "react";

interface TvImageProps {
  url: string
}

const TvImage: React.FC<TvImageProps> = ({url}: TvImageProps) => {
  if (!url) return <img className='tv-image' src={posterMissing} alt={"show-poster-missing"}/>
  return <img className='tv-image' src={url} alt={"show-poster"}/>
}

export default TvImage
