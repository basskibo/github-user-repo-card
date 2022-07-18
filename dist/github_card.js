import * as React from "react";
export function GithubCard() {
    const [count, setCount] = React.useState(0);
    return (React.createElement(React.Fragment, null,
        React.createElement("p", null,
            "You clicked ",
            count,
            " times"),
        React.createElement("button", { onClick: () => setCount(count + 1) }, "Click me")));
}
