import React from 'react';
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Welcome from './pages/Welcome';
import Home from './pages/Main';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
  <ApolloProvider client={client}>
    <Router>
          <Routes>
            <Route 
              path="/" 
              element={<Welcome />} 
            />
            <Route 
              path="/home"
              element={<Home />} 
            />
          </Routes>
    </Router>
  </ApolloProvider>
  );
}

export default App;
