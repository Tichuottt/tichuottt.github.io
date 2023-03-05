import classes from './Introduction.module.css'
import TypingText from "../TypingText";
import FadeIn from "../FadeIn";

const Introduction = (props) => {

    const scrollToSection = (ref) => () => {
        ref?.current.scrollIntoView({behavior: 'smooth'})
    }

    return (
        <div className={classes.introduction}>
            <div className={classes.topIntro}>

                <div className={classes.nameIntro}>
                    <div className={classes.whiteColumn}>
                        <h1>H</h1>
                        <h1>C</h1>
                        <h1>L</h1>
                    </div>


                    <div className={classes.nameColumn}>
                        <FadeIn><h1>ua</h1></FadeIn>
                        <FadeIn speed={1.5}><h1>at</h1></FadeIn>
                        <FadeIn speed={2}><h1>uong</h1></FadeIn>
                    </div>

                </div>

                <div className={classes.navagationColumn}>
                    <h3 onClick={scrollToSection(props?.aboutMeRef)}>About me</h3>
                    <h3 onClick={scrollToSection(props?.contactsRef)}>Contacts</h3>
                </div>
            </div>

            <div className={classes.bottomIntro}>
                <h4 onClick={scrollToSection(props?.aboutMeRef)}>
                    {'Scroll down\nto explore'}
                </h4>

                <h1>
                    {TypingText('Building tomorrow\'s\nworld with code\n today.', 25)}
                </h1>

            </div>


        </div>


    )
}

export default Introduction
