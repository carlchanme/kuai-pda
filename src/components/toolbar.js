import React, {useContext} from "react";
import {
    faBars,
    faBullhorn,
    faEye,
    faEyeSlash,
    faMinus,
    faPause,
    faPlay,
    faPlus,
    faRedo,
    faTextHeight
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Button} from "react-bootstrap";
import AppContext from "../AppContext";
import AppTooltip from "./tooltip";

const style = {
    button: {
        borderColor: "transparent"
    }
}

const Toolbar = () => {
    const {
        textComponent,
        setTextComponent,
        textSize,
        setTextSize,
        narration,
        setNarration,
        disableAudio,
        disableSupportingText
    } = useContext(AppContext);

    const showHideText = () => {
        setTextComponent(!textComponent)
    }

    const increaseText = () => {
        setTextSize(textSize + 2)
    }

    const decreaseText = () => {
        if (textSize < -5) return
        setTextSize(textSize - 2)
    }

    const playPause = () => {
        setNarration(!narration)
    }

    const replay = () => {

    }

    return (
        <div id="tools" className="d-inline float-right">
            <div id="supporting_text_tools"
                 className={`supporting_text_control mr-2 ${disableSupportingText ? 'opacity50' : ''}`}>
                <FontAwesomeIcon icon={faBars}/>
                <span className="tool_text"> Supporting Text </span>
                <AppTooltip title={textComponent ? 'Hide Supporting Text' : 'Show Supporting Text'}>
                    <Button disabled={disableSupportingText} variant="light ml-2" style={style.button} size="sm"
                            onClick={() => showHideText()}>
                        <FontAwesomeIcon icon={textComponent ? faEyeSlash : faEye}/>
                    </Button>
                </AppTooltip>


            </div>
            <div className="text_control mr-2">
                <FontAwesomeIcon icon={faTextHeight}/>
                <span className="tool_text"> Text Size</span>
                <AppTooltip title="Increase Text Size">
                    <Button className="ml-2" variant="light" style={style.button} size="sm"
                            onClick={() => increaseText()}>
                        <FontAwesomeIcon icon={faPlus}/>
                    </Button>
                </AppTooltip>
                <AppTooltip title="Decrease Text Size">
                    <Button className="ml-1" variant="light" style={style.button} size="sm"
                            onClick={() => decreaseText()}>
                        <FontAwesomeIcon icon={faMinus}/>
                    </Button>
                </AppTooltip>
            </div>
            <div id="narration_tools" className={`narration_control ${disableAudio ? 'opacity50' : ''}`}>
                <FontAwesomeIcon icon={faBullhorn}/>
                <span className="tool_text"> Narration</span>
                <AppTooltip title="Play Narration">
                    <Button disabled={disableAudio} className="ml-2" variant="light" style={style.button} size="sm"
                            onClick={() => playPause()}>
                        {!narration && <FontAwesomeIcon icon={faPlay}/>}
                        {narration && <FontAwesomeIcon icon={faPause}/>}
                    </Button>
                </AppTooltip>
                <AppTooltip title="Replay Narration">
                    <Button disabled={disableAudio} className="ml-1" variant="light" style={style.button} size="sm"
                            onClick={() => replay()}>
                        <FontAwesomeIcon icon={faRedo}/>
                    </Button>
                </AppTooltip>
            </div>
        </div>
    )
}

export default Toolbar
