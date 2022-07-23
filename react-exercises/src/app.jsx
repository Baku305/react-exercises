import React from "react";
import TodoList from "./TodoList";

export class App extends React.Component {
	render() {
		return (
			<>
				<div>
					<TodoList
						render={(items,newState) => {
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
													onClick={() => {
                            itemsCopy.splice(i,1)
                            newState(itemsCopy)
                          }
													}
												>
													CLEAR
												</button>
											</li>
										</div>
									))
                }
								</ul>
							);
						}}
					
          setState = ""/>
				</div>
			</>
		);
	}
}
