import React from "react";


export class Welcome3 extends React.Component{
    render(){
        return <p>Welcome {this.props.name} <span>your age is {this.props.age}</span></p>
    }
}

