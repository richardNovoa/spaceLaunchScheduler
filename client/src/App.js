import logo from './logo.png';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Launches from './components/Launches';

const client = new ApolloClient({
	uri: 'http://localhost:5001/graphql',
	cache: new InMemoryCache()
});

function App() {
	return (
		<ApolloProvider client={client}>
			<div className='container'>
				<img
					src={logo}
					alt='SpaceX'
					style={{ width: 300, margin: 'auto', display: 'block' }}
				/>
				<Launches />
			</div>
		</ApolloProvider>
	);
}

export default App;
