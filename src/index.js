import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header from './components/Header'

const header = ReactDOM.createRoot(document.getElementById('header'));
header.render(<Header userName={"ggg@gmail.com"}/>);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App bots={null}/>);

