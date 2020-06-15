import React, { Component } from "react";

export class counter extends Component {
	constructor(props) {
		super(props);

		this.state = {
			counter: 0,
		};
	}
	componentWillMount() {
		console.log("i am from componentWillMount - " + this.state.counter);
	}

	componentDidMount() {
		console.log("I am from componentDidMount- " + this.state.counter);
	}

	shouldComponentUpdate() {
		console.log("I am from shouldComponentUpdate - " + this.state.counter);
		if (this.state.counter < 5 || this.state.counter > 10) return true;
		return false;
	}

	componentWillUpdate() {
		console.log("I am from componentWillUpdate- " + this.state.counter);
	}

	componentDidUpdate() {
		console.log(" I am from componentDidUpdate -" + this.state.counter);
	}

	render() {
		console.log("Im am from render- " + this.state.counter);
		return (
			<div>
				<p>{this.state.counter}</p>
				<button
					onClick={() =>
						this.setState({ counter: this.state.counter + 1 })
					}
				>
					Increment
				</button>
			</div>
		);
	}
}

export default counter;
