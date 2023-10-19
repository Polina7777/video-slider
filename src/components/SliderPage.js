import { Component } from "react";
import Flicking from "@egjs/react-flicking";
import { Perspective } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";
import arrowNext from '../assets/image/arrow-next.svg';
import arrowPrev from '../assets/image/arrow-prev.svg';
import React from 'react';
import Slider from 'react-slick';
import { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider2.css'; // Создайте свой CSS-файл для стилизации
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

export default class PreviousNextMethods extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  // const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  // const handleVideoChange = (newIndex) => {
  //   setActiveVideoIndex(newIndex);
  // };
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
// const settings = {
//   centerMode: true,
//   infinite: true,
//   centerPadding: '0',
//   slidesToShow: 3,
//   speed: 500,
//   focusOnSelect: true,
  // className: "center",
  // centerMode: true,
  // infinite: true,
  // centerPadding: "60px",
  // slidesToShow: 3,
  // speed: 500
//};

pageTitle = 'Academy';
// const plugins = [new Perspective({ rotate: -0.3, scale: 1, perspective: 800 })];
render() {
  const settings = {
    // dots: true,
    slidesToScroll: 1,
    className: "center ",
    centerMode: true,
   // infinite: true,
    centerPadding: "10px",
    slidesToShow: 3,
    speed: 500,
    arrows:false,
    initialSlide:2
  };
  const {videosArr,active} = this.props
return( <div  className='slider-wrapper'>
         <div className='page-header__wrapper slider-page_header__wrapper'>
       <div className='title-box'>
        <img src={arrowPrev} alt='arrow-prev' className='arrow' />
        <Link to='/'>
        <h2>{this.pageTitle}</h2>
        </Link>
        </div>
        <button>Skip</button>
    </div>
    {/* <Flicking circular={true} plugins={plugins}   className='slider-box'> */}
    <div className="carousel-container">
    <Slider ref={c => (this.slider = c)} {...settings} >
    { videosArr? videosArr.items.map((item,idx)=>{
      return    <div className={'carousel-item  slider-box'}>
          {/* Активное видео */}
          {/* <iframe className='card-panel' src={item.video}></iframe> */}
           <video
 id="my-video"
 className="video-js"
  // controls
  // preload="auto"
//  width="640"
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
// </p> */}
 </video> 
   
      <p className='video-title'>{item.title}</p>
            
           </div> 
    }) : null}
    {/* </Flicking> */}
    </Slider>
    </div>
    <button className="arrows-buttons">
    <img src={arrowPrev} className='arrow arrow-prev arrow-prev-slider' onClick={this.previous} alt='arrow-prev'/>
    <img src={arrowNext} className='arrow arrow-next arrow-next-slider'onClick={this.next}  alt='arrow-next'/>
    </button>
    </div> 
  
)
}
}
// import Flicking from "@egjs/flicking";
// import { Perspective } from "@egjs/flicking-plugins";
// import React from "react";

// export default function defaultSlidePage() {
// const flicking = new Flicking("#flick", {
//   circular: true
// });

// flicking.addPlugins(new Perspective({
//   rotate: -1,
//   scale: 2,
//   perspective: 600
// }));
// return (
//   <div id="flick" className="flicking-viewport">
//   <div className="flicking-camera">
//     <div className="card-panel">1</div>
//     <div className="card-panel">2</div>
//     <div className="card-panel">3</div>
//     <div className="card-panel">4</div>
//     <div className="card-panel">5</div>
//     <div className="card-panel">6</div>
//   </div>
// </div>
// )

// }



// <video
// id="my-video"
// className="video-js"
// // controls
// // preload="auto"
// // width="640"
// // height="264"
// poster={item.poster}
// data-setup="{}"
// >
// <source src={item.video} type="video/mp4" />

// {/* <p class="vjs-no-js">
//   To view this video please enable JavaScript, and consider upgrading to a
//   web browser that
//   <a href="https://videojs.com/html5-video-support/" target="_blank"
//     >supports HTML5 video</a
//   >
// </p> */}
// </video> 