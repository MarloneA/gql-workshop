import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import apolloClient from './utils/ApolloClient';
import { ApolloProvider } from 'react-apollo';



ReactDOM.render(
    <ApolloProvider client={apolloClient}>
        <App />
    </ApolloProvider>, 
    document.getElementById('root')
);
