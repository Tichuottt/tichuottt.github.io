import {useEffect, useState} from "react";
import styled from "styled-components";

const Container = styled.div`   
   opacity: ${props => props?.isVisible ? '1' : '0'};
   transition: all ${props => props?.speed + 's'} ease-in-out;
   display: flex;
`

const FadeIn = ({children, speed = 1}) => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <Container isVisible={isVisible} speed={speed}>
            {children}
        </Container>
    );
};

export default FadeIn;
