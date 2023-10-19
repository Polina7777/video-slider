'use client';
import arrowNext from '../assets/image/arrow-next.svg';
import arrowPrev from '../assets/image/arrow-prev.svg';
import coin from '../assets/image/coin.svg'
import hat from '../assets/image/hat.svg'
// import "node_modules/video-react/dist/video-react.css"; 
import ReactPlayer from 'react-player/'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  useNavigate,
  Link
} from "react-router-dom";



 function ContentBox({item}) {
    const arr= item.items;

    const navigate = useNavigate();
    const clickCard=(url)=>{
      console.log('sdvdv')
      navigate('/slider', { state: { active: url, videos: item } });
    }

  return (
    <div className='content-box'>
        <div className='content-box__header'>
       <h3>{item.title}</h3>
       <div className='seeAll-wrapper'>
       <p className='seeAll'>{item.seeAll}</p>
       <img src={arrowNext} className='arrow arrow-next' alt='arrow-next'/>
       </div>
       </div>
       <div className='video-list__wrapper'>
       { item.items.map(item =>{      
return   <div className='player-wrapper' onClick={()=>clickCard(item.video)}>   <video
id="my-video"
className="video-js"
// controls
// preload="auto"
// width="640"
// height="264"
poster={item.poster}
data-setup="{}"
>
<source src={item.video} type="video/mp4" />

{/* <p class="vjs-no-js">
  To view this video please enable JavaScript, and consider upgrading to a
  web browser that
  <a href="https://videojs.com/html5-video-support/" target="_blank"
    >supports HTML5 video</a
  >
</p> */}
</video> 
<p className='video-title'>{item.title}</p>
<div className='hat_box'>
  <img src={hat} alt='hat'/>
</div>
<div className='coin_box'>
  <img src={coin} alt='coin' className='coin'/>
  <p className='coin-title'>Earn 2T</p>
</div>
{/* //  <div className='player-wrapper'> */}
      
     </div>
    //  </Link>
})}

     
    </div>
    </div>
)
}
{/* <ReactPlayer
className='react-player'
url={item.video}
poster={item.poster}
// width='250px'
// height='310px'
loop
/> */}
//  <Link to={'/slider'}>

export default ContentBox;