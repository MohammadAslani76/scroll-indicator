import {useEffect,useState} from "react";

const ScrollIndicator = () => {
    const [scrollTop,setScrollTop] = useState(0);
    const onScroll = () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        setScrollTop(scrolled);
    }
    useEffect(() => {
        window.addEventListener('scroll',onScroll);
    },[])
    return (
        <div className="w-full h-3 bg-gray-200 absolute -bottom-2 left-0">
            <div className="h-full bg-blue-400" style={{width : `${scrollTop}%`}}/>
        </div>
    );
};

export default ScrollIndicator;
