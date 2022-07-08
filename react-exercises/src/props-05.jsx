import React from "react";

export class Age extends React.Component {
  render() {
    return <span> {this.props.age >=18 ? `your age is ${this.props.age}` : "You are very young!"}</span>;
  }
}

export class Welcome5 extends React.Component {
  render() {
    return (
      <div>
        <p>
          <span>Welcome {this.props.name}</span>
          {this.props.age > 15 && <Age age={this.props.age} />}
        </p>
      </div>
    );
  }
}

export class Welcome6 extends React.Component {
  render() {
    return (
      <div>
        <p>
          <span>Welcome {this.props.name === "John" && this.props.name}</span>
          {this.props.age && this.props.age > 18 && this.props.age < 65 && (
            <Age age={this.props.age} />
          )}
        </p>
      </div>
    );
  }
}
