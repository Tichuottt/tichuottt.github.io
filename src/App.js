import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom'
import HelloWorld from "./pages/HelloWorld/HelloWorld";
import Resume from "./pages/Resume/Resume";
import Birthday from "./pages/Birthday/Birthday";
import classes from "./App.module.css";

function App() {

    /*
    * Solution for redirecting to 404 not found page
    * When hosting static static single page application and
    * go to hcl.com/abcxyc and refresh it will return 404 page not found
    * because it's a static single page application the hosting only know hcl.com
    * so we config for the host to know we're using static single page application
    * In Netlify for Example. We redirect to the index.html when we make request to the server
    * https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writing-manually/44467274#44467274
    * */


    return (
        <div className={classes.App}>
            <Routes>
                <Route
                    path="*"
                    element={<Navigate to="/" replace/>}
                />
                <Route exact path='/' element={<HelloWorld/>}/>
                <Route path="/resume" element={<Resume/>}/>
                <Route path="/bd" element={<Birthday/>}/>
            </Routes>
        </div>
    );
}

export default App;
