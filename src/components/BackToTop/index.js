import {useEffect, useState} from "react";
import styled from "styled-components";

const Text = styled.h3`
    position: fixed;
    bottom: 1.5vh;
    right: 3vw;
    color: #fff;
    white-space: pre-wrap;
    cursor: pointer;
    border-left: 1px solid gray;
    padding-left: 3px;
    opacity: ${props => props?.isShow ? '1' : '0'};
    transition: all .2s ease-in-out;
    &:hover { color: #81b1ef; border-left: 1px solid #81b1ef; }
`

export default function BackToTop() {
    const [isShow, setIsShow] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', detectScrollEnd);

        return () => {
            window.addEventListener('scroll', detectScrollEnd);
        };
    }, []);

    function detectScrollEnd() {
        const scrollTop = document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const scrollHeight = document.documentElement.scrollHeight;

        if (scrollTop + windowHeight >= scrollHeight - 100) {
            setIsShow(true)
            return
        }

        setIsShow(false)
    }

    if (!isShow) {
        return null
    }

    function onClickToTop() {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    return (
        <Text isShow={isShow} onClick={onClickToTop}>{'Back\nTo\nTop'}</Text>
    )
}
