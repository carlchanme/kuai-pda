import React, {useState} from 'react';
import ReactCardFlip from "react-card-flip";

function FlipCardImage({title, frontImage, backImage, ...otherProps}) {
    const [flip, setFlip] = useState(false)
    const handleFlipped = () => setFlip(!flip)

    return (
        <div style={{marginBottom: 20, padding: 10, height: "100%"}}>
            <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
                <div style={{margin: 'auto'}} onClick={handleFlipped}>
                    <img className="img" alt={title}
                         src={frontImage} {...otherProps}></img>
                    <span align='center' style={{display: "inline-block", width: "100%", fontSize: 25}}>{title}</span>
                </div>
                <div style={{margin: 'auto'}} onClick={handleFlipped}>
                    <img className="img" alt={title}
                         src={backImage} {...otherProps}></img>
                    <span align='center' style={{display: "inline-block", width: "100%", fontSize: 25}}>{title}</span>
                </div>
            </ReactCardFlip>
        </div>

    );
}

export default FlipCardImage;
