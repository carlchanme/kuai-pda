import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

function UsePageNavigator({pages}) {
    const location = useLocation();
    const index = pages?.map((page, index) => `/${index}`).indexOf(location.pathname)
    const [progress, setProgress] = useState(0)
    const [previous, setPrevious] = useState(null)
    const [next, setNext] = useState(null)

    useEffect(() => {
        console.log({path: "useEffect", index, pages})
        const percentage = index / (pages?.length - 1) * 100
        setProgress(percentage)

        const prevIndex = index > 0 ? index - 1 : null
        const prevPath = (prevIndex !== null) ? `/${prevIndex}` : null
        setPrevious(prevPath)

        const nextIndex = (index < pages?.length -1) ? index + 1 : null
        const nextPath = nextIndex ? `/${nextIndex}` : null
        setNext(nextPath)
    }, [index])

    return { progress, previous, next};
}

export default UsePageNavigator;