import {OverlayTrigger, Tooltip} from "react-bootstrap";

const AppTooltip = ({title, children}) => {
    return (
        <OverlayTrigger
            placement="top"
            delay={{show: 250, hide: 400}}
            overlay={(props) => (
                <Tooltip id="button-tooltip" {...props}>
                    {title}
                </Tooltip>
            )}
        >
            {children}
        </OverlayTrigger>
    )
}

export default AppTooltip
