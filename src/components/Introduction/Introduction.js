import classes from './Introduction.module.css'

const Introduction = (props) => {
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
                        <h1>ua</h1>
                        <h1>at</h1>
                        <h1>uong</h1>
                    </div>
                </div>


                <div className={classes.navagationColumn}>
                    <h3>About me</h3>
                    <h3>Contacts</h3>
                    <h3>Project</h3>
                </div>
            </div>

            <div className={classes.bottomIntro}>
                <h4>
                    {'Scroll down\nto explore'}
                </h4>

                <h1>
                    {'A new breath for\nyour cooperate\nservice'}
                </h1>
            </div>


        </div>


    )
}

export default Introduction
