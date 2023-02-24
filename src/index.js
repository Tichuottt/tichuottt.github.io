import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import {AuthContextProvider} from "./store/auth-context";
import {BrowserRouter} from "react-router-dom"; //Using HashRouter instead of BrowserRouter when use GitHub page because gh-page doesn't support SPA and redirect to index.html

//DOCS: https://blog.logrocket.com/deploying-react-apps-github-pages/
//DOCS: https://create-react-app.dev/docs/deployment/#step-1-add-homepage-to-packagejson
//DOCS: https://www.freecodecamp.org/news/deploy-a-react-app-to-github-pages/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthContextProvider>
                <App/>
            </AuthContextProvider>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
