import React from "react";
import { ClickCounter } from "./ClickCounter";
import ClickTracker from "./ClickTracker ";
import { Container } from "./Container";
import { DisplayLanguage } from "./DisplayLanguage";
import InteractiveWelcome from "./InteractiveWelcome ";
import Login from "./Login";
import TodoList from "./TodoList";
import UncontrolledLogin from "./UncontrolledLogin";
import { Welcome } from "./Welcome";
import { languageContext } from "./LanguageContext";

export class App extends React.Component {
	state = {
		language: "en",
	};

	handleLenguageChange = (event) => {
		this.setState({
			language: event.target.value,
		});
		console.log(this.state);
	};

	onLogin = (state) => console.log(state);

	render() {
		return (
			<>
				<div>
					<ClickCounter />
				</div>
				<div>
					<ClickTracker />
				</div>
				<div>
					<InteractiveWelcome />
				</div>
				<div>
					<Login onLogin={this.onLogin} />
				</div>
				<div>
					<UncontrolledLogin />
				</div>
				<div>
					<TodoList
						render={(items, deleteItems) => {
							const itemsCopy = [...items.items];
							return (
								<ul>
									{itemsCopy.map((el, i) => (
										<div key={i}>
											<li>
												{el}
												<button onClick={() => deleteItems(itemsCopy, i)}>CLEAR</button>
											</li>
										</div>
									))}
								</ul>
							);
						}}
					/>
				</div>
				<Container>
					<Welcome />
				</Container>

				<languageContext.Provider value={this.state.language}>
					<DisplayLanguage onChange={this.handleLenguageChange}/>
				</languageContext.Provider>
			</>
		);
	}
}
