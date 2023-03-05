import React, {useCallback, useRef} from "react";
import {loadFull} from "tsparticles";
import classes from './HelloWorld.module.css'
import useEventListener from '@use-it/event-listener'
import IntroHeader from "../../components/IntroHeader/IntroHeader";
import Introduction from "../../components/Introduction/Introduction";
import AboutMe from "../../components/AboutMe/AboutMe";
import Contacts from "../../components/Contacts/Contacts";
import BackToTop from "../../components/BackToTop";

const HelloWorld = () => {
    let keyPressed = useRef('')
    const aboutMeRef = useRef(null);
    const contactsRef = useRef(null);

    const particlesInit = useCallback(async engine => {
        console.log('engine', engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log('container', container);
    }, []);

    const handler = (event) => {
        const {key} = event
        keyPressed.current += key
        if (keyPressed.current.includes('emnguoiyeu')) {
            window.open('https://www.instagram.com/huong.pham56/', '_blank')
            keyPressed.current = ''
        }
        console.log(keyPressed.current)
    }

    useEventListener('keydown', handler);



    //https://99designs.com/profiles/arkline/designs/1939681
    return (
        <div className={classes.helloworld}>
            <IntroHeader/>
            <Introduction aboutMeRef={aboutMeRef} contactsRef={contactsRef}/>
            <AboutMe aboutMeRef={aboutMeRef}/>
            <Contacts contactsRef={contactsRef}/>

            <BackToTop/>

            {/*window.scrollTo({ top: 0, behavior: 'smooth' });*/}


            {/*<Particles*/}
            {/*    id="tsparticles"*/}
            {/*    init={particlesInit}*/}
            {/*    loaded={particlesLoaded}*/}
            {/*    options={particle}*/}
            {/*/>*/}
        </div>
    )
}

export default HelloWorld




