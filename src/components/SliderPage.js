import { Component } from "react";
import Flicking from "@egjs/react-flicking";
import { Perspective } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";

export default class DemoComponent extends Component {
plugins = [new Perspective({ rotate: -0.3, scale: 1, perspective: 800 })];

 render() {
    return<Flicking circular={true} plugins={this.plugins} className='slider-wrapper'>
      <div className="card-panel">1fdffbb</div>
      <div className="card-panel">2sdvsdv</div>
      <div className="card-panel">3sdvv</div>
      <div className="card-panel">4svsdv</div>
      <div className="card-panel">5svdsv</div>
      <div className="card-panel">6svdvd</div>
    </Flicking>
   
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