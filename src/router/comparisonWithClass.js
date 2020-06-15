import React, { Component } from "react";

export class comparisonWithClass extends Component {
	constructor(props) {
		super(props);

		this.state = {
			counter: 2,
			card: 10,
		};
	}

	increaseCount() {
		this.setState({
			counter: this.state.counter + 1,
		});
	}

	increaseCard() {
		this.setState({
			card: this.state.card + 1,
		});
	}

	componentDidMount() {
		console.log("i am in componentdidMount");
	}

	componentDidUpdate() {
		console.log("i am from componentDidupdate");
	}

	render() {
		console.log("i am from rendering");
		return (
			<div>
				<button
					onClick={() => {
						this.increaseCount();
					}}
				>
					Counter
				</button>
				<button
					onClick={() => {
						this.increaseCard();
					}}
				>
					Card
				</button>

				<p>counter value: {this.state.counter}</p>
				<p>Card value: {this.state.card}</p>
			</div>
		);
	}
}

export default comparisonWithClass;
