import posterMissing from '../../assets/no-image-available.png'

interface TvImageProps {
  url: string
}

const TvImage = ({url}: TvImageProps) => {
  if (!url) return <img className='tv-image' src={posterMissing} alt={"show-poster-missing"}/>
  return <img className='tv-image' src={url} alt={"show-poster"}/>
}

export default TvImage
