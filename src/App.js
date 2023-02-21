import React from 'react';
import {Route, Switch} from 'react-router-dom'
import HelloWorld from "./pages/HelloWorld/HelloWorld";
import Redirect from "react-router-dom/es/Redirect";
import Resume from "./pages/Resume/Resume";
import Birthday from "./pages/Birthday/Birthday";

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
        <div>
            {/*<MainHeader/>*/}
            <main>

                <Switch>
                    <Route path={'/'} exact><Redirect to={'/helloworld'}/></Route>
                    <Route path={'/helloworld'}><HelloWorld/></Route>
                    <Route path={'/resume'}><Resume/></Route>
                    <Route path={'/bd'}><Birthday/></Route>

                    {/*Catch all when redirecting to a 404 Not Found page*/}
                    <Route><HelloWorld/></Route>

                    {/*<Route path={'/products'} exact><Products/></Route>*/}
                    {/*<Route path={'/products/:productId'}><ProductDetails/></Route>*/}
                </Switch>

            </main>
        </div>
    );
}

export default App;
