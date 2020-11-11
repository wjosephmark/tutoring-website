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
          <div className="home-text">
            <p>
              My name is Kilee Rohlf.  I was raised in Montana where I attended Bozeman High School and maintained a 4.0 GPA throug all four years.  I was a state champion swimmer, and Valedictorian for my class.  I moved to Utah to attend school as a math major at BYU on an acedemic and athletic scholarship.  I attended class at BYU for 3 years until I transfered to the U of U in 2020.
            </p>
            <p>
              During quarantine, everyone is struggling with their online classes.  The virtual classrooms make it difficult for children to develop a relationship with their teacher and get the personalized help that they need with problems that they are struggling with.  
              Having a tutor is almost a necessity for all classes in 2020, especially when you take all the complex challenges of equations, algorithms, and other difficult aspects of math classes into consideration.  I will offer personalized help to your child that will help them deeply 
              understand and get a firm grasp on the concepts they are being taught.  I will teach them while we complete their assignments so they will be ahead in class, and I will make sure they are ready for everything from a pop quiz to the class final.
            </p>
          </div>
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
