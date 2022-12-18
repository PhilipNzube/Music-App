import React from 'react';

export default function Artists() {
    const OverlaySongsView = () => {
        document.getElementById("SongsViewOverlay").style.display = "block";
    }
    return (
        <>
            <div id="SongsViewOverlay">

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