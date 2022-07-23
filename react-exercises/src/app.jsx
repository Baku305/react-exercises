import React from "react";
import { Container } from "./Container";
import { Welcome } from "./Welcome";

export class App extends React.Component {

  onLogin = (state) => console.log(state);

  render() {
    return (
        <>
        <Container title="titolo">
          <Welcome/>
        </Container>
        </>
    );
  }
}
