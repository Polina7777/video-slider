'use client';
import arrowNext from '../assets/image/arrow-next.svg';
import arrowPrev from '../assets/image/arrow-prev.svg';
// import "node_modules/video-react/dist/video-react.css"; 
import ReactPlayer from 'react-player/'


export default function defaultContentBox({item}) {
    const arr= item.items
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
return   <ReactPlayer
className='react-player'
url={item.video}
width='250px'
height='310px'
loop
/>
//  <div className='player-wrapper'>
      
          {/* <video
    id="my-video"
    class="video-js"
    controls
    preload="auto"
    width="640"
    height="264"
    // poster="MY_VIDEO_POSTER.jpg"
    data-setup="{}"
  >
    <source src={item.video} type="video/mp4" />
    
    <p class="vjs-no-js">
      To view this video please enable JavaScript, and consider upgrading to a
      web browser that
      <a href="https://videojs.com/html5-video-support/" target="_blank"
        >supports HTML5 video</a
      >
    </p>
  </video> */}
  {/* <video     id="my-video"
    className="video-js"
    controls
    // autoPlay
    preload="auto"
    width="240"
    height="300"
    // poster="MY_VIDEO_POSTER.jpg"
    data-setup="{}">
            <source src={item.video} type="video/mp4" />
    </video> */}
    //   </div>
})}

     
    </div>
    </div>
)
}
