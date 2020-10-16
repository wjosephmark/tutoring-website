import React, { useState, useEffect } from "react";
import {navigate} from "hookrouter"

export default function App(props) {

  useEffect(() => {
    props.handleHomeClick()
  }, [])

  return (
    <div className="app">
      <div className="content-wrapper">

        <div className="home-text-wrapper">
          <div className="first-image-wrapper"> 
            <img id="first-image" src="https://i.ibb.co/jMstMqQ/kid-doing-math.png" />
          </div>
          <p className="home-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in tempus est. Sed ac urna lobortis, laoreet arcu sit amet, lacinia dui. Sed mattis lectus eget enim placerat, nec lobortis sapien tincidunt. Maecenas eleifend ultrices massa vel commodo. Etiam faucibus neque sed nibh venenatis sodales. Proin sodales condimentum fringilla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut sagittis, risus sed maximus egestas, nisl purus consectetur turpis, at efficitur risus enim nec urna. Aliquam convallis, diam et efficitur ornare, elit elit cursus erat, a vehicula velit dolor id risus. Vivamus suscipit ultricies urna, in pulvinar nulla tempor eu. Etiam sapien ligula, maximus eget nisi id, tincidunt ultrices turpis. Phasellus a feugiat orci. Proin dolor orci, sollicitudin in dui vel, vestibulum semper libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in tempus est. Sed ac urna lobortis, laoreet arcu sit amet, lacinia dui. Sed mattis lectus eget enim placerat, nec lobortis sapien tincidunt.
          </p>
        </div>
      </div>
    </div>
  )

  // return (
  //   <div className="app">
  //     {/* <div className="grid-wrapper"> */}
  //       <div className="first-row-wrapper">
  //         <div className="first-text-wrapper">
  //           <p className="first-text">
  //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at leo rhoncus, eleifend urna sit amet, feugiat erat. Donec ultricies finibus nunc, vitae viverra mi pharetra eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec pellentesque, purus tempor aliquet congue, enim mauris dapibus mi, nec ullamcorper nisi risus id mi. In molestie porta sodales. Aliquam id purus lacus. Curabitur consequat ante cursus blandit pellentesque. Quisque consectetur, odio sed pretium ullamcorper, lectus erat laoreet ante, mattis efficitur est magna id arcu. Aliquam nunc neque, pharetra at sagittis ac, imperdiet quis neque. Maecenas commodo magna eu rutrum euismod. Nullam fringilla quam augue, in elementum nisl suscipit nec. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
  //           </p>
  //         </div>
  //         <div className="first-image-wrapper">
  //           <img src="https://i.ibb.co/Cm142x0/mathimage.jpg" />
  //         </div>
          
  //       </div>

      
  //       <div className="second-row-wrapper">
  //         <div className="second-image-wrapper">
  //           <img src="https://i.ibb.co/jMstMqQ/kid-doing-math.png" />
  //         </div>
  //         <div className="second-text-wrapper">
  //           <p className="second-text">
  //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at leo rhoncus, eleifend urna sit amet, feugiat erat. Donec ultricies finibus nunc, vitae viverra mi pharetra eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec pellentesque, purus tempor aliquet congue, enim mauris dapibus mi, nec ullamcorper nisi risus id mi. In molestie porta sodales. Aliquam id purus lacus. Curabitur consequat ante cursus blandit pellentesque. Quisque consectetur, odio sed pretium ullamcorper, lectus erat laoreet ante, mattis efficitur est magna id arcu. Aliquam nunc neque, pharetra at sagittis ac, imperdiet quis neque. Maecenas commodo magna eu rutrum euismod. Nullam fringilla quam augue, in elementum nisl suscipit nec. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
  //           </p>
  //         </div>

  //       </div>
  //   </div>
  // );
}
