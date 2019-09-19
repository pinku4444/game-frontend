import Knob from './components/knob';
import Statics from './components/statics';
import client from './apollo';
import { ApolloProvider } from 'react-apollo'
import ButtonComponent from './components/Body/ButtonComponent'
import Footer from './components/footer';

function App() {
	return (
		<ApolloProvider client={client}>
			<div className="App" >
				<Header />
				<Knob />
				<ButtonComponent />
				<Statics />
				<Footer />
			</div>
		</ApolloProvider>
	);
}

export default App;
