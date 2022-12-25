import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Albums from './Albums.js';
import BottomBar from './BottomBar';
import SideBar from './SideBar';
import Songs from './Songs';
import Artists from './Artists';
import TopBar from './TopBar';
import swDev from './swDev';


function START() {
  // var jsmediatags = require("jsmediatags");
    // var jsmediatags = window.jsmediatags;
    // jsmediatags.read("./Songs/Underrated.mp3", {
    //     onSuccess: (tag) => {
    //         var tags = tag.tags;
    //         alert(tags.artists + "_" + tags.title + "," + tags.album);
    //         console.log("WORK");
    //         console.log(tag);
    //     },
    //     onError: (error) => {
    //         console.log(':(', error.type, error.info);
    //     }
    // });
    // var jsmediatags = window.jsmediatags;

    // $("#filesToUpload").change(function(e){
    //   for (var i = 0; i < e.target.files.length; i++) {
    //     console.log('File ' + (i + 1) + ':  ' + e.target.files[i]);
    //     jsmediatags.read(e.target.files[i], {
    //       onSuccess: function(tag) {
    //         console.log(tag);
    //       },
    //       onError: function(error) {
    //         console.log(error);
    //       }
    //     });
    //   }
    // });
  return (
    <>
      <div id="LOADING">LOADING PLAYER...</div>
      <div id="Container">
      <BrowserRouter>
        <TopBar />
        <BottomBar />
          <SideBar />
          <Songs />
          <Artists />
          <Albums />
        {/* <Routes>
          <Route path="/" element={<Songs />} />
          <Route path="/Artists" element={<Artists />} />
          <Route path="/Albums" element={<Albums />} />
        </Routes> */}
        </BrowserRouter>
        </div>
    </>
  )

}

swDev();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(< START />);