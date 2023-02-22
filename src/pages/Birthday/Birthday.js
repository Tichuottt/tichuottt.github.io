import {useCallback, useEffect, useState} from "react";
import classes from './Birthday.module.css'
import {loadFull} from "tsparticles";
import Particles from "react-particles";
import AddWish from "../../components/Birthday/AddWish";
import {FIREBASE_URL} from "../../utils/Const";

const countDownDate = new Date("Jun 05, 2023 00:00:00").getTime();
// https://particles.js.org/docs/classes/Options_Classes_Particles_Shape_Shape.Shape.html#image

const Birthday = () => {
    const [wishes, setWishes] = useState(["😘"])
    const [countDown, setCountDown] = useState('')
    const [isBd, setIsBd] = useState(false)
    const particlesInit = useCallback(async engine => {
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {

    }, []);

    const countDownTimer = () => {
        let x = setInterval(() => {

            // Get today's date and time
            let now = new Date().getTime();

            // Find the distance between now and the count down date
            let distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            setCountDown(days + "d " + hours + "h " + minutes + "m " + seconds + "s ")

            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(x);
                setIsBd(true)
            }
        }, 1000);
    };

    const requestWishes = async () => {
        const res = (await fetch(
            FIREBASE_URL + 'bd.json',
            {
                method: 'GET',
            }
        )).json()

        res.then(wishesRes => {
            console.log(wishesRes)
            for (const key in wishesRes) {
                setWishes(prevState => {
                        return [
                            ...prevState, wishesRes[key]?.text
                        ]
                    }
                )
            }
        })
    }

    useEffect(() => {
        countDownTimer()

        requestWishes()


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

    const onAdd = (wish) => {
        setWishes(prevState => {
            return [...prevState, wish]
        })
    }

    return (
        <div className={classes.container}>
            <h1>Happy Birthday!</h1>
            {isShowWhenBd()}
            {isShowWhenCountDown()}
            <AddWish onAdd={onAdd}/>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    "fullScreen": {
                        "enable": true,
                        "zIndex": -1
                    },
                    "name": "Background Mask",
                    "particles": {
                        "number": {
                            "value": wishes.length < 20 ? wishes.length : 20,
                            "density": {
                                "enable": true
                            }
                        },
                        "color": {
                            "value": "#fff"
                        },
                        "shape": {
                            "type": [
                                "image",
                                "character",
                                "char"
                            ],
                            "character": {
                                "value": wishes,
                                "font": "Arial",
                                "style": "",
                                "weight": ""
                            },
                            "image": {
                                "src": "https://i.imgur.com/99TrwWo.png",
                                "width": 103 / 1.5,
                                "height": 222 / 1.5,
                                "replaceColor": false
                            }
                        },
                        "opacity": {
                            "value": 0.9
                        },
                        "size": {
                            "value": {
                                "min": 5,
                                "max": 10
                            }
                        },
                        "links": {
                            "enable": true,
                            "distance": 160,
                            "color": "#ac0e77",
                            "opacity": 1,
                            "width": 1
                        },
                        "move": {
                            "enable": true,
                            "speed": 1.5,
                            "direction": "none",
                            "random": false,
                            "straight": false
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onHover": {
                                "enable": true,
                                "mode": [
                                    "bubble"
                                ]
                            },
                            "onClick": {
                                "enable": true,
                                "mode": "push"
                            }
                        },
                        "modes": {
                            "bubble": {
                                "distance": 400,
                                "size": 40,
                                "duration": 3,
                                "opacity": 0.7
                            },
                            "push": {
                                "quantity": 2
                            }
                        }
                    },
                    "backgroundMask": {
                        "enable": false,
                        "cover": {
                            "value": {
                                "r": 221,
                                "g": 180,
                                "b": 234
                            }
                        }
                    },
                    "background": {
                        "color": "#000",
                        "image": "url('https://i.imgur.com/aJlnpI5.jpg')",
                        "position": "center",
                        "repeat": "repeat",
                        "size": "cover"
                    }
                }
                }
            />
        </div>
    )
}

export default Birthday
