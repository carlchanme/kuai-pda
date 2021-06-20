import React from 'react';
import ReactPlayer from "react-player";

function Player({path}) {
    return (
        <ReactPlayer
            width="1280"
            height="720"
            playing={false}
            controls
            url={path}
        />
    );
}

export default Player;