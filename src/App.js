import React from 'react';
import Header from './components/header';
import Knob from './components/knob';
import Statics from './components/statics';
import client from './apollo';
import { ApolloProvider } from 'react-apollo'
import ButtonComponent from './components/Body/ButtonComponent'

function App() {
	return (
		<ApolloProvider client={client}>
			<div className="App" >
				<Header />
				<Knob />
				<ButtonComponent />
				<Statics />
			</div>
		</ApolloProvider>
	);
}

export default App;
