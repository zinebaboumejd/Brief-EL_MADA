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
    <ApolloProvider client={car}>
    {/* <Navbar/> */}
   <div className="container items-center">
    <AddCar/>
  <Car/>
  <Router>
         
            <Routes>
              <Route path='/addcar' element={<AddCar/>} />
            </Routes>
        
        </Router>
</div>
</ApolloProvider>
  </>
  );
}

export default App;
