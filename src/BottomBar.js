import React, { useEffect, useState } from 'react';
import Song1 from './Songs/FeelAlone.mp3'
import DefaultIMG from './Images/Def.png'

export default function BottomBar() {
    // setTimeout(() => {
    //     document.getElementById("PlayButton").style.background = "url('./Images/PauseButton.png') 0 0 no-repeat";
    //     document.getElementById("PlayButton").style.backgroundSize = "cover";   
    // },1200)
    // document.getElementById("Song1").volume = document.getElementById("VolumeSlider").value;
    let rAF = null;
    const whilePlaying = () => {
        document.getElementById("CurrentTime").innerHTML = ConvertElaspedTime(document.getElementById("Song1").currentTime);
        document.getElementById("SeekDuration").innerHTML = ConvertElaspedTime(document.getElementById("Song1").duration);
        document.getElementById("SeekSlider").max = Math.floor(document.getElementById("Song1").duration);
        document.getElementById("SeekSlider").value = document.getElementById("Song1").currentTime;
        document.getElementById("OverlayCurrentTime").innerHTML = ConvertElaspedTime(document.getElementById("Song1").currentTime);
        document.getElementById("OverlaySeekDuration").innerHTML = ConvertElaspedTime(document.getElementById("Song1").duration);
        document.getElementById("OverlaySeekSlider").max = Math.floor(document.getElementById("Song1").duration);
        document.getElementById("OverlaySeekSlider").value = document.getElementById("Song1").currentTime;
        // if (document.getElementById("SeekSlider").value === document.getElementById("Song1").duration) {
        //     document.getElementById("SeekSlider").value = 0;
        //     console.log("EndAudio");
        // }
        rAF = requestAnimationFrame(whilePlaying);
    }

    const whileEnded = () => {
        document.getElementById("PauseButton").style.display = "none";
        document.getElementById("PlayButton").style.display = "block";
        document.getElementById("SeekSlider").value = 0;
        document.getElementById("CurrentTime").innerHTML = ConvertElaspedTime(document.getElementById("SeekSlider").value);
        document.getElementById("SeekDuration").innerHTML = ConvertElaspedTime(document.getElementById("Song1").duration);
        document.getElementById("OverlayPauseButton").style.display = "none";
        document.getElementById("OverlayPlayButton").style.display = "block";
        document.getElementById("OverlaySeekSlider").value = 0;
        document.getElementById("OverlayCurrentTime").innerHTML = ConvertElaspedTime(document.getElementById("OverlaySeekSlider").value);
        document.getElementById("OverlaySeekDuration").innerHTML = ConvertElaspedTime(document.getElementById("Song1").duration);
        localStorage.setItem("Play", true);
        rAF = requestAnimationFrame(whileEnded);
    }


    // const OverlaywhilePlaying = () => {
    //     document.getElementById("OverlayCurrentTime").innerHTML = ConvertElaspedTime(document.getElementById("Song1").currentTime);
    //     document.getElementById("OverlaySeekDuration").innerHTML = ConvertElaspedTime(document.getElementById("Song1").duration);
    //     document.getElementById("OverlaySeekSlider").max = Math.floor(document.getElementById("Song1").duration);
    //     document.getElementById("OverlaySeekSlider").value = document.getElementById("Song1").currentTime;
    //     // if (document.getElementById("SeekSlider").value === document.getElementById("Song1").duration) {
    //     //     document.getElementById("SeekSlider").value = 0;
    //     //     console.log("EndAudio");
    //     // }
    //     rAF = requestAnimationFrame(OverlaywhilePlaying);
    // }

    const ConvertElaspedTime = (inputSeconds) => {
        var seconds = Math.floor(inputSeconds % 60);
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        var minutes = Math.floor(inputSeconds / 60);
        return minutes + ":" + seconds;
    }

    // useEffect(() => {

    //     setTimeout(() => {
    //         document.getElementById("CurrentTime").innerHTML = ConvertElaspedTime(document.getElementById("Song1").currentTime);
    //         document.getElementById("SeekDuration").innerHTML = ConvertElaspedTime(document.getElementById("Song1").duration);
    //     }, 1500);
    //     if (document.getElementById("Song1").paused) {
    //         // console.log("ghost");
    //     }
    // })

    const ShowDetails = () => {
        document.getElementById("LOADING").style.display = "none";
        document.getElementById("Container").style.display = "block";
        // document.getElementById("CurrentTime").innerHTML = ConvertElaspedTime(document.getElementById("Song1").currentTime);
        // document.getElementById("SeekDuration").innerHTML = ConvertElaspedTime(document.getElementById("Song1").duration);
    }

    const PlayButClick = () => {
        if (JSON.parse(localStorage.getItem("SE")) === true) {
            cancelAnimationFrame(rAF);
            document.getElementById("PlayButton").style.display = "none";
            document.getElementById("PauseButton").style.display = "block";
            document.getElementById("OverlayPlayButton").style.display = "none";
            document.getElementById("OverlayPauseButton").style.display = "block";
            document.getElementById("Song1").play();
            requestAnimationFrame(whilePlaying);
        }
    }
    const PauseButClick = () => {
        document.getElementById("PauseButton").style.display = "none";
        document.getElementById("PlayButton").style.display = "block";
        document.getElementById("OverlayPauseButton").style.display = "none";
        document.getElementById("OverlayPlayButton").style.display = "block";
        document.getElementById("Song1").pause();
        cancelAnimationFrame(rAF);
    }
    const SeekChange = () => {
        cancelAnimationFrame(rAF);
        document.getElementById("Song1").currentTime = document.getElementById("SeekSlider").value;
        requestAnimationFrame(whilePlaying);
        // if (!document.getElementById("Song1").paused) {
        //     requestAnimationFrame(whilePlaying);
        // }
    }

    const OverlaySeekChange = () => {
        cancelAnimationFrame(rAF);
        document.getElementById("Song1").currentTime = document.getElementById("OverlaySeekSlider").value;
        requestAnimationFrame(whilePlaying);
        // if (!document.getElementById("Song1").paused) {
        //     requestAnimationFrame(whilePlaying);
        // }
    }

    const SeekInput = () => {
        cancelAnimationFrame(rAF);
        document.getElementById("CurrentTime").innerHTML = ConvertElaspedTime(document.getElementById("SeekSlider").value);
        document.getElementById("OverlayCurrentTime").innerHTML = ConvertElaspedTime(document.getElementById("OverlaySeekSlider").value);
        // document.getElementById("SeekSlider").value = document.getElementById("Song1").currentTime; 
        cancelAnimationFrame(rAF);
        // if (!document.getElementById("Song1").paused) {
        //     cancelAnimationFrame(rAF);
        // }
    }

    const SetVolume = () => {
        document.getElementById("MuteVolumeImg").style.display = "none";
        document.getElementById("VolumeImg").style.display = "block";
        document.getElementById("OverlayMuteVolumeImg").style.display = "none";
        document.getElementById("OverlayVolumeImg").style.display = "block";
        document.getElementById("Song1").volume = document.getElementById("VolumeSlider").value;
    }

    const EndAudio = () => {
        cancelAnimationFrame(rAF);
        requestAnimationFrame(whileEnded);
        cancelAnimationFrame(rAF);
        // console.log("EndAudio");
    }

    // const Update = () => {
    //     document.getElementById("CurrentTime").innerHTML = ConvertElaspedTime(document.getElementById("Song1").currentTime);
    //     document.getElementById("SeekDuration").innerHTML = ConvertElaspedTime(document.getElementById("Song1").duration);
    //     document.getElementById("SeekSlider").max = Math.floor(document.getElementById("Song1").duration);
    //     // if (Seeking == false) {
    //         document.getElementById("SeekSlider").value = document.getElementById("Song1").currentTime;
    //     // }
    // }

    const [VolumeValue, StoreValue] = useState(0);

    const Mute = () => {
        // StoreValue(document.getElementById("VolumeSlider").value);
        document.getElementById("VolumeImg").style.display = "none";
        document.getElementById("MuteVolumeImg").style.display = "block";
        document.getElementById("OverlayVolumeImg").style.display = "none";
        document.getElementById("OverlayMuteVolumeImg").style.display = "block";
        document.getElementById("Song1").volume = 0;
        // document.getElementById("VolumeSlider").value = 0;
    }

    const UnMute = () => {
        // document.getElementById("VolumeSlider").value = VolumeValue;
        document.getElementById("MuteVolumeImg").style.display = "none";
        document.getElementById("VolumeImg").style.display = "block";
        document.getElementById("OverlayMuteVolumeImg").style.display = "none";
        document.getElementById("OverlayVolumeImg").style.display = "block";
        document.getElementById("Song1").volume = document.getElementById("VolumeSlider").value;
    }

    const ShowOverlay = () => {
        if (JSON.parse(localStorage.getItem("SE")) === true) {
            // console.log("ghost");
            if (document.getElementById("Overlay").style.opacity == 0) {
                // console.log("ghost1");
                document.getElementById("Overlay").style.zIndex = "1";
                document.getElementById("OverlayCurrentTime").innerHTML = ConvertElaspedTime(document.getElementById("Song1").currentTime);
                document.getElementById("OverlaySeekDuration").innerHTML = ConvertElaspedTime(document.getElementById("Song1").duration);
                document.getElementById("BottomPlayerUIContainer").style.zIndex = "0";
                document.getElementById("Overlay").style.opacity = "1";
                document.getElementById("BottomPlayerUIContainer").style.display = "none";
                document.body.style.overflowY = "hidden";
                document.getElementById("OverlaySeekSlider").max = Math.floor(document.getElementById("Song1").duration);
                document.getElementById("OverlaySeekSlider").value = document.getElementById("Song1").currentTime;
                // document.getElementById("Overlay").style.animationName = "FadeOut";
            } else if (document.getElementById("Overlay").style.opacity == 1) {
                // console.log("ghost2");
                document.getElementById("BottomPlayerUIContainer").style.display = "block";
                document.getElementById("Overlay").style.opacity = "0";
                document.getElementById("BottomPlayerUIContainer").style.zIndex = "1";
                setTimeout(() => {
                    document.getElementById("Overlay").style.zIndex = "-1";
                }, 1000);
                // setTimeout(() => {
                //     document.getElementById("Overlay").style.animationName = "FadeOut";
                // document.getElementById("Overlay").style.animationDuration = "1s";
                // document.getElementById("Overlay").style.animationIterationCount = "1";
                //     document.getElementById("Overlay").style.display = "none";
                //     document.getElementById("BottomPlayerUIContainer").style.zIndex = "1";
                //     document.getElementById("Overlay").style.animationName = "FadeIn";
                // }, 1000);
                document.body.style.overflowY = "scroll";
            }
        }

    }

    // const ShowDuration = () => {
    //     document.getElementById("Duration").innerHTML = ConvertElaspedTime(document.getElementById("Song1Dur").duration);
    // }

    // const FTU = (e) => {
    //     var jsmediatags = require("jsmediatags");
    //         console.log('File ' + ':  ' + e.target.files);
    //         jsmediatags.read("http://localhost:3000/static/media/FeelAlone.048a0626fc01586d2f59.mp3", {
    //             onSuccess: function (tag) {
    //                 var tags = tag.tags;
    //                 console.log(tags);
    //                 document.getElementById("SongTitle").innerHTML = tags.title;
    //           },
    //           onError: function(error) {
    //             console.log("fucking hell" + error);
    //           }
    //         });


    // var jsmediatags = require("jsmediatags");
    //   for (var i = 0; i < e.target.files.length; i++) {
    //     console.log('File ' + (i + 1) + ':  ' + e.target.files[i]);
    //     jsmediatags.read(e.target.files[i], {
    //         onSuccess: function (tag) {
    //             var tags = tag.tags;
    //             console.log(tags);
    //             document.getElementById("SongTitle").innerHTML = tags.title;
    //       },
    //       onError: function(error) {
    //         console.log(error);
    //       }
    //     });
    //   }
    // }

    return (
        <>
            <audio id="Song1" type="audio/mpeg" preload="metadata" src={Song1} onLoadedData={ShowDetails} onEnded={EndAudio}></audio>
            <audio id="Song1Dur" type="audio/mpeg" preload="metadata" src=""></audio>
            <div id="Overlay">
                <div id="BackButton" onClick={ShowOverlay}></div>
                <div id="OverlayBottom">
                    <div id="OverlayMusicArt" onClick={ShowOverlay}><div id="OverlaySongDetails"><div id="OverlaySongTitle">Feel Alone</div><br />
                        <div id="OverlaySongArtist">Juice WRLD</div></div></div>
                    <div id="OverlayMainPlayerControls">
                        <div id="OverlayPlayerControls">
                            <div id="OverlayPrevious"></div>
                            <div id="OverlayNext"></div>
                            <div id="OverlayPlayButton" onClick={PlayButClick}></div><div id="OverlayPauseButton" onClick={PauseButClick}></div>
                            <div id="OverlaySeek">
                                <span id="OverlayCurrentTime">0:00</span>
                                <span id="OverlaySeekDuration">0:00</span>
                                <input id="OverlaySeekSlider" type="range" step="0.1" min="0" max="100" value="0" onInput={SeekInput} onChange={OverlaySeekChange} />
                            </div>
                        </div>
                        <div id="OverlayVolumeControls">
                            <div id="OverlayVolumeImg" onClick={Mute}></div>
                            <div id="OverlayMuteVolumeImg" onClick={UnMute}></div>
                        </div>
                    </div>
                    <img id="OverlayMA" src={DefaultIMG} alt="Album Art"/>
                    <img id="OverlayBGMA" src={DefaultIMG} alt="" />
                    <div id="BottomBGMA"></div>
                </div>
            </div>
            <div id="BottomPlayerUIContainer">
                {/* <form>
	<input name="filesToUpload[]" id="filesToUpload" type="file" onChange={FTU} multiple/>
</form> */}
                {/* <input id="test" type="range"/> */}
                <div id="MusicArt" onClick={ShowOverlay}><div id="SongDetails"><div id="SongTitle"></div><br />
                    <div id="SongArtist"></div></div></div>
                <div id="MainPlayerControls">
                    <div id="PlayerControls">
                        <div id="Previous"></div>
                        <div id="Next"></div>
                        <div id="PlayButton" onClick={PlayButClick}></div><div id="PauseButton" onClick={PauseButClick}></div>
                        <div id="Seek">
                            <span id="CurrentTime">0:00</span>
                            <span id="SeekDuration">0:00</span>
                            <input id="SeekSlider" type="range" step="0.1" min="0" max="100" value="0" onInput={SeekInput} onChange={SeekChange} />
                        </div>
                    </div>
                    <div id="VolumeControls">
                        <div id="VolumeImg" onClick={Mute}></div>
                        <div id="MuteVolumeImg" onClick={UnMute}></div>
                        <input id="VolumeSlider" type="range" step="0.1" min="0" max="1" onChange={SetVolume} />
                    </div>
                </div>
                <img id="MA" src={DefaultIMG} alt="Album Art" />
            </div>
        </>
    )
}