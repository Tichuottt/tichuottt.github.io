import classes from './IntroHeader.module.css'

const IntroHeader = (props) => {

    return (
        <div className={classes.introHeader}>
            <div className={classes.leftIntro}>
                <h2>Mobile Engineer</h2>
                <h2>App / Web</h2>
                <h2>Software Engineer</h2>
            </div>

            <h1>{'Techno\nlogies'}</h1>
        </div>

    )
}

export default IntroHeader
