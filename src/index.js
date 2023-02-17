import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const themeImageHandler = (isLight) => {
    if (isLight) {
        document.body.style.backgroundImage =`${`url(${process.env.PUBLIC_URL}/day3.jpg)`}`;
    }
    else {
        document.body.style.backgroundImage =`${`url(${process.env.PUBLIC_URL}/spaceBack3.jpg)`}`;
    }
}
root.render(

    <App themeImageHandler={themeImageHandler} />
);

