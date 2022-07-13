import React from "react";

export class ClickCounter extends React.Component {

        
    state = {
        count : 0
    }

    render(){
        return <div>
            <h1>Count : {this.state.count}</h1>
            <button onClick={this.eventHandler}>Increase</button>
            </div>
    }

    eventHandler = () => {
        this.setState(
             {count : this.state.count + 1} 
        )
    }

}