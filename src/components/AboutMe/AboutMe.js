import classes from './AboutMe.module.css'


const AboutMe = (props) => {


    return (
        <div ref={props?.aboutMeRef} className={classes.container}>

            <img
                src={'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=cover&w=2070&q=80'}
                alt="example"/>
            <div className={classes.aboutme}>
                <h2>
                    {'As a highly skilled and experienced React Native developer, I have designing, implementing and publishing multiple mobile applications of several high-profile apps. I am an enthusiastic and dedicated Mobile Engineer with a passion for creating innovative and engaging mobile apps . I\'m excited to bring my skills and experience\n' +
                        'to your organization and contribute to the success of your mobile initiatives.'}
                </h2>
                <h3>
                    {'As a mobile engineer, your primary focus is to develop and maintain mobile applications that run on mobile devices such as smartphones and tablets. The role involves working closely with other members of the development team, such as designers and back-end developers, to create applications that meet the needs of the business or the end user'}
                </h3>
            </div>

            <h1>{'About\nme'}</h1>
        </div>


    )
}

export default AboutMe
