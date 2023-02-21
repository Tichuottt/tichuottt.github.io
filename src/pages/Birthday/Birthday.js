import {useCallback, useEffect, useState} from "react";
import classes from './Birthday.module.css'
import {loadFull} from "tsparticles";
import particle from "../../assets/particles-style/background-mask.json";
import Particles from "react-particles";

const countDownDate = new Date("Jun 05, 2023 00:00:00").getTime();
// https://particles.js.org/docs/classes/Options_Classes_Particles_Shape_Shape.Shape.html#image
const Birthday = () => {

    const [countDown, setCountDown] = useState('')
    const [isBd, setIsBd] = useState(false)
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
    const countDownTimer = () => {
        let x = setInterval(() => {

            // Get today's date and time
            let now = new Date().getTime();

            // Find the distance between now and the count down date
            let distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);
            setCountDown(days + "d " + hours + "h " + minutes + "m " + seconds + "s ")

            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(x);
                setIsBd(true)
            }
        }, 1000);
    };


    useEffect(() => {
        countDownTimer()
    }, []);

    const isShowWhenBd = () => {
        if (isBd) {
            return (
                <h2>{`Chúc pé 1 ngày sinh nhật dui dẻ`}</h2>
            )
        }
    }

    const isShowWhenCountDown = () => {
        if (!isBd) {
            return (
                <h2>{countDown}</h2>
            )
        }
    }

    return (
        <div className={classes.container}>
            <h1>Happy Birthday!</h1>
            {isShowWhenBd()}
            {isShowWhenCountDown()}
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={particle}
            />
        </div>
    )
}

export default Birthday
