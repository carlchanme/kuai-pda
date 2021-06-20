import React, {useState} from 'react';
import ReactCardFlip from "react-card-flip";

function FlipCard({title, description}) {
    const [flip, setFlip] = useState(false)
    const handleFlipped = () => setFlip(!flip)

    return (
        <div style={{marginBottom: 20, padding: 10, height: "100%"}}>
            <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
                <div  onClick={handleFlipped} class="card--container--front"><div>{title}</div></div>
                <div  onClick={handleFlipped} class="card--container--back"><div>{description}</div></div>
            </ReactCardFlip>
        </div>
    );
}

export default FlipCard;
