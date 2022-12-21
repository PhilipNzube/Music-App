import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function TopBar({ STATE }) {
    // const [ArtistsClickCount, setACount] = useState(0);
    var SongsNow = true;
    var ArtistsNow = false;
    var AlbumsNow = false;
    useEffect(() => {
        if (document.getElementById("SongsContainer") != null) {
            SongsNow = true;
            ArtistsNow = false;
            AlbumsNow = false;
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
        } else if (document.getElementById("ArtistsContainer") != null) {
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
        } else if (document.getElementById("AlbumsContainer") != null) {
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
        Navigate("/");
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
        if (SongsNow === false) {
            document.getElementById("Songs").style.color = "rgb(0, 0, 0, 0.555)";
        }
    }

    const ArtistsClick = () => {
        Navigate("/Artists");
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
        Navigate("/Albums");
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
                        <hr id="hr2" />
                    </div>
                </div>
            </div>
        </>
    )
}