import { useLocation } from 'react-router-dom';
import './watch.scss'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

export default function Watch() {

  const location = useLocation();
  console.log(location);
  const movie = location.movie;
  console.log(movie);
  return (
    <div className='watch'>
        <div className="back">
            <ArrowBackOutlinedIcon />
            Home
        </div>

       <video
        className="video"
        autoPlay
        progress="true"
        controls
        src="https://vod-progressive.akamaized.net/exp=1703849206~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4286%2F14%2F371433846%2F1541905617.mp4~hmac=6053e98021ea4fb3c6423a5cf9935deb21358437720126ee7dbcb0a4026f54fe/vimeo-prod-skyfire-std-us/01/4286/14/371433846/1541905617.mp4"
      />
      
    </div>
  )
}
