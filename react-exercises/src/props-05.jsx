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
            {this.props.age > 18 && <Age age={this.props.age}/>}
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
          <span>Welcome {this.props.name}</span>
          {this.props.age && this.props.age > 18 && <Age age = {this.props.age}/> }
        </p>
      </div>
    );
  }
}
