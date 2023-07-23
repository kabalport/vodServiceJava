import { useEffect, useRef, useState } from "react";
import create from "zustand";

interface State {
    isContraction: boolean,
    isLocking: boolean,
    scrollDirection: 'down' | 'up',
    setContraction: (isContraction: boolean) => void
    setScrollDirection: (direction: 'down' | 'up') => void
    setLocking: (isLock: boolean) => void
}


export const useScrollStore = create<State>(set => ({
    isContraction: false,
    scrollDirection: 'up',
    isLocking: false,
    setContraction: (isContraction: boolean) => {
        set((state) => ({
            isContraction: isContraction
        }))
    },
    setScrollDirection: (direction: 'down' | 'up') => {
        set((state) => ({
            scrollDirection: direction
        }))
    },
    setLocking: (isLock: boolean) => {
        set((state) => ({
            isLocking: isLock,
        }))
    }
}))

function getWindowDimensions() {
    const { innerHeight: inheight } = window;
    return {
        inheight
    };
}

export const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowDimensions;
}
