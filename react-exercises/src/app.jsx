import React from "react";
import { Welcome } from "./Welcome";
import { Container } from "./Container";

export class App extends React.Component {

  onLogin = (state) => console.log(state);

  render() {
    return (
        <>
        <Container>
          <Welcome/>
        </Container>
        </>
    );
  }
}
