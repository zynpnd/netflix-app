import './watch.scss'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

export default function Watch() {
  return (
    <div className='watch'>
        <div className="back">
            <ArrowBackOutlinedIcon />
            Home
        </div>
        {/* <iframe
        className="video"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/BvHSCiUFPpg"
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
      ></iframe> */}
       <video
        className="video"
        autoPlay
        progress="true"
        controls
        src="https://vod-progressive.akamaized.net/exp=1624452918~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2400%2F14%2F362003850%2F1486625955.mp4~hmac=d6f829e7bb83f1ee6a28047d00aa2c1083c8fe5036c8084a4adf1c3903085856/vimeo-prod-skyfire-std-us/01/2400/14/362003850/1486625955.mp4"
      />
      
    </div>
  )
}
