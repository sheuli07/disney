import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home";
import ContactUs from "./components/contactUs";
import Launch from "./components/launch";
import Feedback from "./components/feedback";
import Hook from "./router/functionwithhooks";
import Hookcomparison from "./router/comparisonWithClass";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Launch}></Route>
				<Route exact path="/home" component={Home} />
				<Route exact path="/contactus" component={ContactUs} />
				<Route exact path="/feedback" component={Feedback}></Route>
				<Route exact path="/functionwithhooks" component={Hook}></Route>
				<Route
					exact
					path="/comparisonclass"
					component={Hookcomparison}
				></Route>
			</Switch>
		</Router>
	);
}

export default App;
