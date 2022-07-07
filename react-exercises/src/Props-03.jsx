import React from "react";

export class Welcome3 extends React.Component {
  render() {
    return (
        <div>
            <span>{this.props.name}</span>
            <span>your age is {this.props.age}</span>
        </div>
    );
  }
}
