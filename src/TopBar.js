import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function TopBar({ STATE }) {
    // const [ArtistsClickCount, setACount] = useState(0);
    var SongsNow = true;
    var ArtistsNow = false;
    var AlbumsNow = false;
    var Skip = 0;
    var AllowSeekDur = false;
    localStorage.setItem("SE", false);
    useEffect(() => {
        if (document.getElementById("SongsContainer").style.display != "none") {
            SongsNow = true;
            ArtistsNow = false;
            AlbumsNow = false;
            document.getElementById("SongsContainer").style.display = "block";
            document.getElementById("ArtistsContainer").style.display = "none";
            document.getElementById("AlbumsContainer").style.display = "none";
            document.getElementById("Artists").style.color = "rgb(0, 0, 0, 0.555)";
            document.getElementById("Artists").style.textDecoration = "none";

            document.getElementById("Albums").style.color = "rgb(0, 0, 0, 0.555)";
            document.getElementById("Albums").style.textDecoration = "none";

            document.getElementById("Songs").style.color = "rgb(0, 0, 0)";
            document.getElementById("Songs").style.textDecoration = "underline";
            document.getElementById("Songs").style.textDecorationColor = "rgb(109, 2, 2)";
            document.getElementById("Songs").style.textDecorationThickness = "4px";
            document.getElementById("Songs").style.textDecorationSkipInk = "none";
            document.getElementById("Songs").style.textUnderlineOffset = "10%";
            // document.getElementById("BottomPlayerUIContainer").style.bottom = "22.3%";
            // document.getElementById("BottomPlayerUIContainer").style.left = "0%";
            // document.getElementById("BottomPlayerUIContainer").style.width = "77.7%";
            // document.getElementById("TopBar").style.bottom = "71.4%";
            // document.getElementById("TopBar").style.left = "5.2%";
            // document.getElementById("TopBar").style.width = "69.8%";
            document.getElementById("SongsContainer").style.overflowX = "hidden";
            // document.getElementById("SongsContainer").style.paddingBottom = "7%";
        } else if (document.getElementById("ArtistsContainer").style.display != "none") {
            ArtistsNow = true;
            AlbumsNow = false;
            SongsNow = false;
            document.getElementById("Songs").style.color = "rgb(0, 0, 0, 0.555)";
            document.getElementById("Songs").style.textDecoration = "none";

            document.getElementById("Albums").style.color = "rgb(0, 0, 0, 0.555)";
            document.getElementById("Albums").style.textDecoration = "none";

            document.getElementById("Artists").style.color = "rgb(0, 0, 0)";
            document.getElementById("Artists").style.textDecoration = "underline";
            document.getElementById("Artists").style.textDecorationColor = "rgb(109, 2, 2)";
            document.getElementById("Artists").style.textDecorationThickness = "4px";
            document.getElementById("Artists").style.textDecorationSkipInk = "none";
            document.getElementById("Artists").style.textUnderlineOffset = "10%";
            // document.getElementById("BottomPlayerUIContainer").style.bottom = "0%";
            // document.getElementById("BottomPlayerUIContainer").style.right = "0%";
            // document.getElementById("BottomPlayerUIContainer").style.width = "100%";
            // document.getElementById("TopBar").style.bottom = "70%";
            // document.getElementById("TopBar").style.left = "6.5%";
            // document.getElementById("TopBar").style.width = "90%";
        } else if (document.getElementById("AlbumsContainer").style.display != "none") {
            AlbumsNow = true;
            ArtistsNow = false;
            SongsNow = false;
            document.getElementById("Artists").style.color = "rgb(0, 0, 0, 0.555)";
            document.getElementById("Artists").style.textDecoration = "none";

            document.getElementById("Songs").style.color = "rgb(0, 0, 0, 0.555)";
            document.getElementById("Songs").style.textDecoration = "none";

            document.getElementById("Albums").style.color = "rgb(0, 0, 0)";
            document.getElementById("Albums").style.textDecoration = "underline";
            document.getElementById("Albums").style.textDecorationColor = "rgb(109, 2, 2)";
            document.getElementById("Albums").style.textDecorationThickness = "4px";
            document.getElementById("Albums").style.textDecorationSkipInk = "none";
            document.getElementById("Albums").style.textUnderlineOffset = "10%";
            // document.getElementById("BottomPlayerUIContainer").style.bottom = "0%";
            // document.getElementById("BottomPlayerUIContainer").style.right = "0%";
            // document.getElementById("BottomPlayerUIContainer").style.width = "100%";
            // document.getElementById("TopBar").style.bottom = "70%";
            // document.getElementById("TopBar").style.left = "6.5%";
            // document.getElementById("TopBar").style.width = "90%";
        }
        setTimeout(() => {
            document.body.style.overflowY = "scroll";
        }, 1250);
    });
    const Navigate = useNavigate();
    const SongsClick = () => {
        // Navigate("/");
        document.getElementById("Latest").style.display = "none";
        document.getElementById("Latest2").style.display = "none";
        document.getElementById("filesToUpload").style.display = "block";
        document.getElementById("SongsContainer").style.display = "block";
        document.getElementById("ArtistsContainer").style.display = "none";
        document.getElementById("AlbumsContainer").style.display = "none";
        document.getElementById("Artists").style.color = "rgb(0, 0, 0, 0.555)";
        document.getElementById("Artists").style.textDecoration = "none";

        document.getElementById("Albums").style.color = "rgb(0, 0, 0, 0.555)";
        document.getElementById("Albums").style.textDecoration = "none";

        document.getElementById("Songs").style.color = "rgb(0, 0, 0)";
        document.getElementById("Songs").style.textDecoration = "underline";
        document.getElementById("Songs").style.textDecorationColor = "rgb(109, 2, 2)";
        document.getElementById("Songs").style.textDecorationThickness = "4px";
        document.getElementById("Songs").style.textDecorationSkipInk = "none";
        document.getElementById("Songs").style.textUnderlineOffset = "10%";
    }

    const SongsHover = () => {
        document.getElementById("Songs").style.color = "rgb(0, 0, 0)";
        document.getElementById("Songs").style.cursor = "pointer";
    }

    const SongsNotHover = () => {
        if (document.getElementById("SongsContainer").style.display === "none") {
            document.getElementById("Songs").style.color = "rgb(0, 0, 0, 0.555)";
        }
    }

    const ArtistsClick = () => {
        // Navigate("/Artists");
        document.getElementById("Latest").style.display = "block";
        document.getElementById("Latest2").style.display = "none";
        document.getElementById("filesToUpload").style.display = "none";
        document.getElementById("SongsContainer").style.display = "none";
        document.getElementById("ArtistsContainer").style.display = "block";
        document.getElementById("AlbumsContainer").style.display = "none";
        document.getElementById("Songs").style.color = "rgb(0, 0, 0, 0.555)";
        document.getElementById("Songs").style.textDecoration = "none";

        document.getElementById("Albums").style.color = "rgb(0, 0, 0, 0.555)";
        document.getElementById("Albums").style.textDecoration = "none";

        document.getElementById("Artists").style.color = "rgb(0, 0, 0)";
        document.getElementById("Artists").style.textDecoration = "underline";
        document.getElementById("Artists").style.textDecorationColor = "rgb(109, 2, 2)";
        document.getElementById("Artists").style.textDecorationThickness = "4px";
        document.getElementById("Artists").style.textDecorationSkipInk = "none";
        document.getElementById("Artists").style.textUnderlineOffset = "10%";
    }

    const ArtistsHover = () => {
        document.getElementById("Artists").style.color = "rgb(0, 0, 0)";
        document.getElementById("Artists").style.cursor = "pointer";
    }

    const ArtistsNotHover = () => {
        if (ArtistsNow === false) {
            document.getElementById("Artists").style.color = "rgb(0, 0, 0, 0.555)";
        }
    }

    const AlbumsClick = () => {
        // Navigate("/Albums");
        document.getElementById("Latest").style.display = "none";
        document.getElementById("Latest2").style.display = "block";
        document.getElementById("filesToUpload").style.display = "none";
        document.getElementById("SongsContainer").style.display = "none";
        document.getElementById("ArtistsContainer").style.display = "none";
        document.getElementById("AlbumsContainer").style.display = "block";
        document.getElementById("Artists").style.color = "rgb(0, 0, 0, 0.555)";
        document.getElementById("Artists").style.textDecoration = "none";

        document.getElementById("Songs").style.color = "rgb(0, 0, 0, 0.555)";
        document.getElementById("Songs").style.textDecoration = "none";

        document.getElementById("Albums").style.color = "rgb(0, 0, 0)";
        document.getElementById("Albums").style.textDecoration = "underline";
        document.getElementById("Albums").style.textDecorationColor = "rgb(109, 2, 2)";
        document.getElementById("Albums").style.textDecorationThickness = "4px";
        document.getElementById("Albums").style.textDecorationSkipInk = "none";
        document.getElementById("Albums").style.textUnderlineOffset = "10%";
    }

    const AlbumsHover = () => {
        document.getElementById("Albums").style.color = "rgb(0, 0, 0)";
        document.getElementById("Albums").style.cursor = "pointer";
    }

    const AlbumsNotHover = () => {
        if (AlbumsNow === false) {
            document.getElementById("Albums").style.color = "rgb(0, 0, 0, 0.555)";
        }
    }

    let rAF = null;
    const whilePlaying = () => {
        document.getElementById("CurrentTime").innerHTML = ConvertElaspedTime(document.getElementById("Song1").currentTime);
        if (AllowSeekDur === "false") {
            document.getElementById("SeekDuration").innerHTML = "0:00";
        }
        setTimeout(() => {
            AllowSeekDur = true;
            document.getElementById("SeekDuration").innerHTML = ConvertElaspedTime(document.getElementById("Song1").duration);
        },3000);
        document.getElementById("SeekSlider").max = Math.floor(document.getElementById("Song1").duration);
        document.getElementById("SeekSlider").value = document.getElementById("Song1").currentTime;
        document.getElementById("OverlayCurrentTime").innerHTML = ConvertElaspedTime(document.getElementById("Song1").currentTime);
        document.getElementById("OverlaySeekDuration").innerHTML = ConvertElaspedTime(document.getElementById("Song1").duration);
        document.getElementById("OverlaySeekSlider").max = Math.floor(document.getElementById("Song1").duration);
        document.getElementById("OverlaySeekSlider").value = document.getElementById("Song1").currentTime;
        rAF = requestAnimationFrame(whilePlaying);
    }

    const ConvertElaspedTime = (inputSeconds) => {
        var seconds = Math.floor(inputSeconds % 60);
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        var minutes = Math.floor(inputSeconds / 60);
        return minutes + ":" + seconds;
    }

    const PlayButClick = () => {
        cancelAnimationFrame(rAF);
        document.getElementById("PlayButton").style.display = "none";
        document.getElementById("PauseButton").style.display = "block";
        document.getElementById("OverlayPlayButton").style.display = "none";
        document.getElementById("OverlayPauseButton").style.display = "block";
        document.getElementById("Song1").play();
        requestAnimationFrame(whilePlaying);
    }

    const FTU = (e) => {
        var jsmediatags = require("jsmediatags");
        for (var i = 0; i < e.target.files.length; i++) {
            console.log('File ' + (i + 1) + ':  ' + e.target.files[i]);
            var Index = i;
            var StoreE = e.target.files;
            console.log(Index);
            console.log(StoreE[Index]);
            // localStorage.setItem("IS", Index);
            // console.log(localStorage.getItem("IS"));
            jsmediatags.read(e.target.files[i], {
                onSuccess: function (tag) {
                    // console.log(localStorage.getItem("IS"));
                    // console.log(StoreE[localStorage.getItem("IS")]);
                    document.getElementById("NoLatest").style.display = "none";
                    document.getElementById("filesToUpload").style.display = "none";
                    document.getElementById("filesToUploadLoader").style.display = "block";
                    Skip += 1;
                    var tags = tag.tags;
                    const reader = new FileReader();
                    reader.onload = function () {
                        var str = this.result;
                        document.getElementById("Song1Dur").src = str;
                        setTimeout(() => {
                            document.getElementById("Song1Dur").addEventListener('onLoadedData', () => {
                                child7.innerHTML = ConvertElaspedTime(document.getElementById("Song1Dur").duration);
                            });
                            setTimeout(() => {
                                child7.innerHTML = ConvertElaspedTime(document.getElementById("Song1Dur").duration);
                                document.getElementById("filesToUpload").style.display = "block";
                    document.getElementById("filesToUploadLoader").style.display = "none";
                            },1000);
                        }, 1800);
                    }
                    reader.readAsDataURL(StoreE[Index]);
                    console.log(tags);
                    const songsContainer = document.getElementById("SongsContainer");
                    // document.getElementById("Song1").src = URL.createObjectURL(e.target.files[i]);
                    const parent = document.createElement('div');
                    parent.id = "Song1";
                    if (Skip == 2) {
                        parent.style.background = "rgb(247, 243, 243)";
                        Skip = 0;
                    } else {
                        parent.style.background = "rgb(196, 188, 188)";
                    }
                    parent.addEventListener('click', () => {
                        if (StoreE[Index].type.indexOf('audio/') !== 0) {
                            console.warn('not an audio file');
                            return;
                        }
                        const reader = new FileReader();
                        reader.onload = function () {
                            var str = this.result;
                            localStorage.setItem("SE", true);
                            console.log(StoreE[Index]);
                            document.getElementById("Song1").src = str;
                            // setTimeout(() => {
                            //     child7.innerHTML = ConvertElaspedTime(document.getElementById("Song1").duration);  
                            // }, 100);
                            // localStorage.setItem("Song", str);
                            // console.log(str);
                            // document.getElementById("Song1").src = `data:${e.target.files.format}; base64, ${window.btoa(str)}`;
                            // console.log(`data:${e.target.files.format}; base64, ${window.btoa(str)}`);
                            PlayButClick();
                            // var aud = new Audio(str);
                            // aud.play();
                            // document.getElementById("Song1").play();
                        }
                        reader.readAsDataURL(StoreE[Index]);

                        // URL.revokeObjectURL(e.target.files[0]);
                        const { data } = tags.picture;
                        let base64String = "";
                        for (var i = 0; i < data.length; i++) {
                            base64String += String.fromCharCode(data[i]);
                        }
                        // document.getElementById("MusicArt").style.background = "rgb(196, 188, 188) url(`data:${data.format}; base64, ${window.btoa(base64String)}`) 0 0 no-repeat";
                        document.getElementById("MA").src = `data:${data.format}; base64, ${window.btoa(base64String)}`;
                        document.getElementById("OverlayMA").src = `data:${data.format}; base64, ${window.btoa(base64String)}`;
                        document.getElementById("OverlayBGMA").src = `data:${data.format}; base64, ${window.btoa(base64String)}`;
                        // document.getElementById("Song1").src = URL.createObjectURL(e.target.files[i]);
                        // console.log(`data:${data.format}; base64, ${window.btoa(base64String)}`);
                        document.getElementById("SongTitle").innerHTML = tags.title;
                        document.getElementById("SongArtist").innerHTML = tags.artist;
                        document.getElementById("OverlaySongTitle").innerHTML = tags.title;
                        document.getElementById("OverlaySongArtist").innerHTML = tags.artist;
                    });
                    const child1 = document.createElement('div');
                    child1.id = "p1";
                    const child2 = document.createElement('div');
                    child2.id = "SongName";
                    const child3 = document.createElement('div');
                    child3.id = "ArtistName";
                    const child4 = document.createElement('div');
                    child4.id = "AlbumName";
                    const child5 = document.createElement('div');
                    child5.id = "Date";
                    const child6 = document.createElement('div');
                    child6.id = "Genre";
                    const child7 = document.createElement('div');
                    child7.id = "Duration";

                    songsContainer.appendChild(parent);
                    parent.appendChild(child1);
                    child1.appendChild(child2);
                    child1.appendChild(child3);
                    child1.appendChild(child4);
                    child1.appendChild(child5);
                    child1.appendChild(child6);
                    child1.appendChild(child7);
                    child2.innerHTML = tags.title;
                    child3.innerHTML = tags.artist;
                    child4.innerHTML = tags.album;
                    child5.innerHTML = tags.year;
                    child6.innerHTML = tags.genre;
                    if (document.getElementById("SongName").style.width >= "25ch") {
                        const marquee = document.createElement('marquee');
                        marquee.appendChild(child2);
                        console.log("marquee");
                    }
                },
                onError: function (error) {
                    console.log(error);
                }
            });
        }
    }

    return (
        <>
            <div id="TopBar">
                <div id="TopBarContent">
                    <div id="AppTitle">My Music</div>
                    <div id="PageLinks">
                        <p><span id="Songs" onMouseLeave={SongsNotHover} onMouseOver={SongsHover} onClick={SongsClick}>Songs</span>
                            <span id="Artists" onMouseLeave={ArtistsNotHover} onMouseOver={ArtistsHover} onClick={ArtistsClick}>Artists</span>
                            <span id="Albums" onMouseLeave={AlbumsNotHover} onMouseOver={AlbumsHover} onClick={AlbumsClick}>Albums</span>
                        </p>
                        <hr id="hr1" />
                        <input name="filesToUpload[]" id="filesToUpload" type="file" onChange={FTU} />
                        <span id="filesToUploadLoader">Please Wait...</span>
                        <span id="Latest">-Artists Who Just Released New Songs-</span>
                        <span id="Latest2">-Latest Albums-</span>
                        <hr id="hr2" />
                    </div>
                </div>
            </div>
        </>
    )
}