import logo from './logo.png';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Launches from './components/Launches';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Launch from './components/Launch';

const client = new ApolloClient({
	uri: 'http://localhost:5001/graphql',
	cache: new InMemoryCache()
});

function App() {
	return (
		<ApolloProvider client={client}>
			<Router>
				<div className='container'>
					<img
						src={logo}
						alt='SpaceX'
						style={{ width: 300, margin: 'auto', display: 'block' }}
					/>
					<Routes>
						<Route path='/' element={<Launches />} />
						<Route path='/launch/:flight_number' element={<Launch />} />
					</Routes>
				</div>
			</Router>
		</ApolloProvider>
	);
}

export default App;
