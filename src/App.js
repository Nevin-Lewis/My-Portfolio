import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Welcome from './pages/Welcome';
import Main from './pages/Main';

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
              element={<Main />} 
            />
          </Routes>
    </Router>
  </ApolloProvider>
  );
}

export default App;
