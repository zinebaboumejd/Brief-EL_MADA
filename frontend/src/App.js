import Car from './components/Car'
import Navbar from './components/Navbar';
import AddCar from './components/AddCar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  ApolloProvider,
  ApolloClient, 
  InMemoryCache,
} from '@apollo/client';
const cache=new InMemoryCache({
  typePolicies:{
    Query:{
      fields:{
        bmws:{
          merge(existing=[],incoming){
            return incoming
          }
        }
      }
    }
  }
})
const car=new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache,
})

function App() {
  return (
    < >
    <div className="container mx-auto  m-2"></div>
      <ApolloProvider client={car}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Car />} />
            <Route path="/add" element={<AddCar />} />
          </Routes>
        </Router>
      </ApolloProvider>
      
  </>
  );
}

export default App;
