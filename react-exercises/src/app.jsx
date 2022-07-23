import React from "react";
import TodoList from "./TodoList";

export class App extends React.Component {
	render() {
		return (
			<>
				<div>
					<TodoList
						render={(items,setState) => {
							const itemsCopy = [...items.items];
							return (
								<ul className="list">
									{itemsCopy.map((el, i) => (
										<div key={`div${el}${i}`} id={`listEl-${i}`}>
											<li key={el + i}>
												{el}
												<button
													key={`button${el}${i}`}
													id={`button${el}${i}`}
													onClick={() => {document.querySelector(".list")
                          .removeChild(document.querySelector(`#listEl-${i}`))
                          setState({
                            items : itemsCopy.splice(i,1)
                          })}
													}
												>
													CLEAR
												</button>
											</li>
										</div>
									))}
								</ul>
							);
						}}
					/>
				</div>
			</>
		);
	}
}
