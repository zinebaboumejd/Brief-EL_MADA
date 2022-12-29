import Car from './components/Car'
import Navbar from './components/Navbar';
import {
  ApolloProvider,
  ApolloClient, 
  InMemoryCache,
} from '@apollo/client';
const car=new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    < >
    <ApolloProvider client={car}>
    {/* <Navbar/> */}
   <div className="container">
  <Car/>

</div>
</ApolloProvider>
  </>
  );
}

export default App;
