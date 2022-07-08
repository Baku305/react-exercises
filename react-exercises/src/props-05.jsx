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
        <p>
          <span>Welcome {this.props.name}</span>
          {!this.props.age ? (
            " insert an age"
          ) : this.props.age < 19 ? (
            " you are a teenager"
          ) : this.props.age >= 65 ? (
            " enjoy your life"
          ) : (
            <Age age={this.props.age} />
          )}
        </p>
      </div>
    );
  }
}

export class Welcome6 extends React.Component {
  render() {
    return (
      <div>
        <span>
          Welcome
          {this.props.name === "John" ? this.props.name : " you aren't John"}
        </span>
        {this.props.age > 18 && this.props.age < 65 ? this.props.age : " insert a valid age"}
      </div>
    );
  }
}
