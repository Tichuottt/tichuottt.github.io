import React, {useCallback, useState} from 'react';
import Particles from "react-particles";
import {loadFull} from "tsparticles";
import particle from '../../assets/particles-style/among-us.json'

import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import './App.css';

const App = () => {

    // INSTRUCTIONS: https://github.com/matteobruni/tsparticles/blob/main/components/react/README.md
    // DEMO: https://particles.js.org/samples/index.html#background
    // DOCUMENTS: https://particles.js.org/docs/
    // DEMO JSON: https://github.com/matteobruni/tsparticles/tree/main/websites/particles.js.org/presets
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    const [courseGoals, setCourseGoals] = useState([
        {text: 'Do all exercises!', id: 'g1'},
        {text: 'Finish the course!', id: 'g2'}
    ]);

    const addGoalHandler = enteredText => {
        setCourseGoals(prevGoals => {
            const updatedGoals = [...prevGoals];
            updatedGoals.unshift({text: enteredText, id: Math.random().toString()});
            return updatedGoals;
        });
    };

    const deleteItemHandler = goalId => {
        setCourseGoals(prevGoals => {
            const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
            return updatedGoals;
        });
    };

    let content = (
        <p style={{textAlign: 'center'}}>No goals found. Maybe add one?</p>
    );

    if (courseGoals.length > 0) {
        content = (
            <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler}/>
        );
    }


    return (

        <div style={{zIndex: 1}}>

            <section id="goal-form" style={{backgroundColor: 'white'}}>
                <CourseInput onAddGoal={addGoalHandler}/>
            </section>
            <section id="goals">
                {content}
                {/*{courseGoals.length > 0 && (*/}
                {/*    <CourseGoalList*/}
                {/*        items={courseGoals}*/}
                {/*        onDeleteItem={deleteItemHandler}*/}
                {/*    />*/}
                {/*)*/}
                {/*    // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>*/}
                {/*}*/}
            </section>

            {/*<Particles*/}
            {/*    id="tsparticles"*/}
            {/*    init={particlesInit}*/}
            {/*    loaded={particlesLoaded}*/}
            {/*    options={particle}*/}
            {/*/>*/}


        </div>
    );
};

export default App;
