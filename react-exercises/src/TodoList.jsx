import React from "react";

export default class TodoList extends React.Component {

        state = {
            items : ['Pino', 'Andrea', 'Willy', "Paola"],
            newItem : ""
        }

        addEvent = () => {

            this.setState({
                items : [...this.state.items,this.state.newItem],
                newItem : ""
            })
        }

        addItem = (event) => {
            this.setState({
                newItem : event.target.value
            })
        }

        resetItems = () => {
            this.setState({
                items : []
            })
        }

    render(){
        return(
        <>
        <div>
            <h1>TODO LIST</h1>
            <input type="text" onChange={this.addItem} value = {this.state.newItem}/>
            <button onClick={this.addEvent} disabled={!this.state.newItem}>ADD</button>
            <button onClick={this.resetItems}>RESET</button>
            <ul>
                {this.state.items.map((el,i) => <li key={el+i}>{el}</li>)}
            </ul>
        </div>
        </>)
    }
}