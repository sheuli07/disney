import React, { Component } from "react";

export class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			message: "Hiiiiiiiiiiiiiiiiiiiiiii",
		};
	}

	componentWillMount() {
		console.log("i am from componentWillMount");
	}

	componentDidMount() {
		console.log("I am from componentDidMount");
		setTimeout(() => {
			this.setState({
				message: "Hello......",
			});
		}, 10000);
	}

	shouldComponentUpdate() {
		console.log("I am from shouldComponentUpdate");
		return false;
	}

	componentWillUpdate() {
		console.log("I am from componentWillUpdate");
	}

	componentDidUpdate() {
		console.log(" I am from componentDidUpdate");
		setTimeout(() => {
			this.setState({
				message: "Welcome to react life cycle",
			});
		}, 10000);
	}

	render() {
		console.log("I am in render");
		return (
			<div>
				<p>{this.state.message}</p>
			</div>
		);
	}
}

export default App;
