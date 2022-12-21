import React from 'react';

export default function Artists() {
    // var jsmediatags = require("jsmediatags");
    // // var jsmediatags = window.jsmediatags;
    // jsmediatags.read("./Songs/FeelAlone.mp3", {
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
    const OverlaySongsView = () => {
        document.getElementById("SongsViewOverlay").style.display = "block";
        document.getElementById("ArtistsContainer").style.display = "none"
    }

    const CloseOverlay = () => {
        document.getElementById("SongsViewOverlay").style.display = "none";
        document.getElementById("ArtistsContainer").style.display = "block";
    }
    return (
        <>
            <div id="SongsViewOverlay">
                <div id="SongsTopBar"><div id="SongsBackButton" onClick={CloseOverlay}></div></div>
            </div>
            <div id="ArtistsContainer">
                <div id="AWrapper">
                    <div id="LetterA">A</div>
                    <div id="ArtistsAContainer">
                        <div id="AArtist1" onClick={OverlaySongsView}>
                            <p id="SubText">Ariana Grande</p>
                        </div>
                        <div id="AArtist2">
                            <p id="SubText">ArrDee</p>
                        </div>
                        <div id="AArtist3">
                            <p id="SubText">ArrDee Ft. Lil Tecca</p>
                        </div>
                        <div id="AArtist4">
                            <p id="SubText">ArrDee x Aitch</p>
                        </div>
                    </div>
                </div>
                <div id="BWrapper">
                    <div id="LetterB">B</div>
                    <div id="ArtistsBContainer">
                        <div id="BArtist1">
                            <p id="SubText">Baby Keem Ft. Kendrick Lamar</p>
                        </div>
                        <div id="BArtist2">
                            <p id="SubText">Bobby Jallo</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}