import React, { Component} from "react";
import { render } from "react-dom";

export default class App1 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <h1>Testing the React</h1>;

    }
}

const theApp = document.getElementById("services");
render(<App1 />, theApp);





