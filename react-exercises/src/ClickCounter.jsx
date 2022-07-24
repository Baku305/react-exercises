import React from "react";

export class ClickCounter extends React.Component {
	state = {
		count: 0,
	};

	render() {
		return (
			<div>
				<h1>Count : {this.state.count}</h1>
				<CounterButton incrementCounter={this.eventHandler} />
			</div>
		);
	}

	eventHandler = () => {
		this.setState({ count: this.state.count + 1 });
	};
}

export class CounterButton extends React.Component {
	render() {
		return <button onClick={this.props.incrementCounter}>Increase</button>;
	}
}
