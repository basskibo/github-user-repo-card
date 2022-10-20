import React from 'react';
const setLanguageColor = (language) => {
    let dotStyle = {
        height: 10, width: 10, backgroundColor: "#bbb", borderRadius: "50%",
        display: "inline-block", marginTop: 4
    };
    switch (language) {
        case "TypeScript":
            return Object.assign(Object.assign({}, dotStyle), { backgroundColor: "#3178c6" });
        case "Shell":
            return Object.assign(Object.assign({}, dotStyle), { backgroundColor: "#89e051" });
        case "JavaScript":
            return Object.assign(Object.assign({}, dotStyle), { backgroundColor: "#f1e05a" });
        case "HTML":
            return Object.assign(Object.assign({}, dotStyle), { backgroundColor: "#e34c26" });
        case "CSS":
            return Object.assign(Object.assign({}, dotStyle), { backgroundColor: "#563d7c" });
        case "Java":
            return Object.assign(Object.assign({}, dotStyle), { backgroundColor: "#b07219" });
        default:
            return Object.assign(Object.assign({}, dotStyle), { backgroundColor: "#f1e05a" });
    }
};
const GithubRepoCard = (repository) => {
    console.log("GRC", repository);
    return (React.createElement(React.Fragment, null, repository ? (React.createElement("div", { style: { color: "#768390", padding: 5, marginLeft: 10 } },
        React.createElement("a", { href: repository.html_url, target: '_blank', rel: 'noreferrer' },
            React.createElement("div", { style: { display: "flex", justifyContent: "left", padding: "10px 0" } },
                React.createElement("span", { style: { color: "#768390", paddingRight: 5, padding: "4px 0" } },
                    React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "22", height: "22" },
                        React.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }),
                        React.createElement("path", { d: "M13 21v2.5l-3-2-3 2V21h-.5A3.5 3.5 0 0 1 3 17.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1h-7zm0-2h6v-3H6.5a1.5 1.5 0 0 0 0 3H7v-2h6v2zm6-5V4H6v10.035A3.53 3.53 0 0 1 6.5 14H19zM7 5h2v2H7V5zm0 3h2v2H7V8zm0 3h2v2H7v-2z", fill: "rgba(118,131,144,1)" }))),
                React.createElement("span", { style: { color: "#539BF5", fontWeight: "bold", fontSize: 25, padding: "5px 0", paddingLeft: 5, textAlign: "left" } }, repository.name)),
            React.createElement("div", { style: { display: "flex", justifyContent: "left", flexWrap: "wrap", gap: 10, marginTop: 5, textAlign: "left" } },
                React.createElement("span", { className: 'font-normal text-sm', style: { fontSize: 15, color: "#768390" } }, repository.description)),
            React.createElement("div", { style: { display: "flex", justifyContent: "left", flexWrap: "wrap", gap: 10, marginTop: 15, color: "#768390", fontSize: 17 } },
                React.createElement("div", { style: setLanguageColor(repository.language) }),
                React.createElement("div", { className: 'ml-0 mr-3', style: { marginRight: 3, marginLeft: 0 } }, repository.language),
                repository.stargazers_count > 0 ? (React.createElement("div", { className: '' },
                    React.createElement("b", null, repository.stargazers_count))) : (React.createElement(React.Fragment, null)))))) : (React.createElement(React.Fragment, null))));
};
export default GithubRepoCard;
