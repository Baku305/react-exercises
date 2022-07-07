import React from "react";

export class Age extends React.Component {

  render() {
    return <span> your age is {this.props.age}</span>;
  }
}

export class Welcome5 extends React.Component {
  render() {
    return (
        <div>
            <span>Welcome {this.props.name}</span>
            <Age age = {this.props.age}/>
        </div>
    );
  }
}
