import React, { useState, useEffect } from "react";

function Functionwithhooks() {
	const [state, setState] = useState({
		counter: 2,
		card: 10,
	});

	const increaseCounter = () => {
		setState({
			...state,
			counter: state.counter + 1,
		});
	};

	const increaseCard = () => {
		setState({
			// counter: state.counter,
			...state,
			card: state.card + 1,
		});
	};

	useEffect(() => {
		console.log("i am in effect");
	}, [state.counter, state.card]);

	console.log(`I am rendering${state.counter}`);
	return (
		<div>
			<button onClick={increaseCounter}>Counter</button>
			<p>Counter Value : {state.counter}</p>
			<button onClick={increaseCard}>Card</button>
			<p>Card Value : {state.card}</p>
		</div>
	);
}

export default Functionwithhooks;
