import React from "react";

export class Counter extends React.Component{


    
    constructor(props){
        super(props)

        this.state = {
            count : this.props.initialValue ?? 0
        }

        setInterval(() => {
            this.setState((state) => {
                return {
                    count : state.count +  (this.props.increment ?? 1)
                }
            })
        },this.props.interval ?? 1000)

    }
    render(){
        return <div><h1> Count : {this.state.count}</h1></div>
    }
}