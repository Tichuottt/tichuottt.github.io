import React, {useCallback, useRef, useState} from "react";
import {Route} from "react-router-dom";
import SocialNetworkList from "../../components/NetworkList/SocialNetworkList";
import WorkNetworkList from "../../components/NetworkList/WorkNetworkList";
import particle from '../../assets/particles-style/among-us.json'
import Particles from "react-particles";
import {loadFull} from "tsparticles";
import classes from './HelloWorld.module.css'
import useEventListener from '@use-it/event-listener'

const HelloWorld = () => {
    const [isShowProfile, setIsShowProfile] = useState(true)
    const COMMAND_KEYS = 'huacatluong'
    let keyPressed = useRef('')

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


    return (
        <div className={classes.helloworld}>
            <Route path={'/helloworld/new-user'}>
                <p>Welcome to Hua Cat Luong</p>
            </Route>
            {isShowProfile ?
                <>
                    <SocialNetworkList/>
                    <WorkNetworkList/>
                </> : null
            }
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={particle}
            />
        </div>
    )
}

export default HelloWorld




