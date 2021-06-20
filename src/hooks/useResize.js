import React, {useCallback, useEffect, useState} from "react";

const useResize = (myRef) => {
    const [width, setWidth] = useState();
    const getWidth = useCallback(() => myRef?.current?.offsetWidth, [myRef]);


    useEffect(() => {
        const handleResize = () => {
            setWidth(getWidth());
        };

        if (myRef.current) {
            setWidth(getWidth());
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [myRef, getWidth]);

    return width && width > 25 ? width - 25 : width;
};

export default useResize