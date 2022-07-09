import React from "react";


export class CounterDisplay extends React.Component{

    render(){
        return <h1> Count : {this.props.count}</h1>
    }
}

export class Counter extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            count : this.props.initialValue ?? 0
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.tick()
        },this.props.interval ?? 1000)
    }

    tick() {
        
        this.setState((state) => {
            return {
                count : state.count +  (this.props.increment ?? 1)
            }
        })
    }
    render(){
        return <div> <CounterDisplay count = {this.state.count}/> </div>
    }
}
