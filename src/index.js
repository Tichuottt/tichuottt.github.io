import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,HashRouter} from "react-router-dom";
import App from './App';
import {AuthContextProvider} from "./store/auth-context";

//DOCS: https://blog.logrocket.com/deploying-react-apps-github-pages/
//DOCS: https://create-react-app.dev/docs/deployment/#step-1-add-homepage-to-packagejson
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <HashRouter>
            <AuthContextProvider>
                <App/>
            </AuthContextProvider>
        </HashRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
