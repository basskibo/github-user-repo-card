import * as React from "react";

export function GithubCard() {
    const [count, setCount] = React.useState(0);
    return (
        <>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </>
    );
}