import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';

// Need to introduce state of lifecycle methods
// and using this
class App extends React.Component {
	state = { 
		pageHeader: "Naming Contests..." 
	};

	componentDidMount() {
		//console.log('did mount');
		//debugger;
		// timers, listeners, ajax
	}
	componentWillUnmount() {
		//console.log('will unmount');
		//debugger;
		// remove timers, listeners
	}
	render() {
		return (
			<div className="App">
				<Header message={this.state.pageHeader} />
				<div>
					{this.props.contests.map(contest =>
						<ContestPreview {...contest} />
						
					)}
				</div>
			</div>
		);
	};
};

export default App;