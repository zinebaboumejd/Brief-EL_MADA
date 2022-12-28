import Bmw from './components/Bmw'
import Navbar from './components/Navbar';
import {
  ApolloProvider,
  ApolloClient, 
  InMemoryCache,
} from '@apollo/client';
const car=new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    < >
    <ApolloProvider client={car}>
    <Navbar/>
   <div className="container">
  <Bmw/>

</div>
</ApolloProvider>
  </>
  );
}

export default App;
