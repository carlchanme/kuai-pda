import React, {useState} from 'react';
import ReactCardFlip from "react-card-flip";
import Table from "../components/Table";

function FlipCardImage({frontImage, items, title}) {
    const [flip, setFlip] = useState(false)
    const handleFlipped = () => setFlip(!flip)

    return (
        <div style={{marginBottom: 20, padding: 10, height: "100%"}}>
            <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
                <div style={{margin: 'auto'}} onClick={handleFlipped}>
                    <img className="img" alt={title}
                         src={frontImage}></img>
                    <span align='center' style={{display: "inline-block", width: "100%", fontSize: 25}}>{title}</span>
                </div>
                <div style={{margin: 'auto'}} onClick={handleFlipped}>
                    {items.map(card => (
                        <Table type={card.type} col1={card.col1} col2={card.col2}/>
                    ))}</div>
            </ReactCardFlip>
        </div>

    );
}

export default FlipCardImage;
