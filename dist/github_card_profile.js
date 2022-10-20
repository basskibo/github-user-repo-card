import React from 'react';
const GithubProfileCard = (profile) => {
    return (React.createElement(React.Fragment, null, profile ? (React.createElement("div", { style: { color: "#768390" } },
        React.createElement("a", { href: profile.html_url, target: '_blank', rel: 'noreferrer' },
            React.createElement("p", { className: 'text-white font-extrabold text-xl mb-3 inline-flex', style: {
                    color: "#FFF" || "#539BF5", display: "flex",
                    justifyContent: "center",
                    fontWeight: "bold",
                    fontSize: 25,
                    alignItems: "center",
                    margin: "0 auto",
                    textDecoration: "none"
                } },
                "@",
                profile.login),
            React.createElement("div", null,
                React.createElement("img", { alt: 'profile avatar', 
                    // layout="fill"
                    // width="50" height="50"
                    src: profile.avatar_url, style: {
                        width: 150, height: 150, borderRadius: 400 / 2,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "10px auto"
                    }, className: 'w-full h-40 border border-gray-400' })),
            React.createElement("div", { style: { color: "#cecece", fontSize: 15, paddingRight: 5, margin: "5px 10px" } },
                React.createElement("div", { className: '  mt-1' },
                    React.createElement("p", { style: { fontStyle: "italic", color: "#768390" } }, profile.bio ? profile.bio : "No bio...")),
                React.createElement("div", { style: { display: "flex", justifyContent: "left", flexWrap: "wrap", gap: 10, marginTop: 15 } },
                    React.createElement("span", { style: { color: "#768390", paddingRight: 5 } },
                        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "15", height: "15", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", "stroke-linecap": "round", "stroke-linejoin": "round", className: "feather feather-users" },
                            React.createElement("path", { d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }),
                            React.createElement("circle", { cx: "9", cy: "7", r: "4" }),
                            React.createElement("path", { d: "M23 21v-2a4 4 0 0 0-3-3.87" }),
                            React.createElement("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" }))),
                    React.createElement("span", null,
                        "Following ",
                        React.createElement("b", null, profile.following)),
                    React.createElement("span", null,
                        "Followers ",
                        React.createElement("b", null, profile.followers))),
                React.createElement("div", { style: { display: "flex", justifyContent: "left", gap: 10, marginTop: 5 } },
                    profile.location ? React.createElement("span", { style: { color: "#768390", paddingRight: 5 } },
                        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "15", height: "15", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", className: "feather feather-map-pin" },
                            React.createElement("path", { d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" }),
                            React.createElement("circle", { cx: "12", cy: "10", r: "3" }))) : React.createElement(React.Fragment, null),
                    React.createElement("span", { className: 'mx-3' }, profile.location)),
                React.createElement("div", { style: { display: "flex", justifyContent: "left", gap: 10, marginTop: 5 } },
                    React.createElement("span", { style: { color: "#768390", paddingRight: 5 } },
                        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "16", height: "16" },
                            React.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }),
                            React.createElement("path", { d: "M13 21v2.5l-3-2-3 2V21h-.5A3.5 3.5 0 0 1 3 17.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1h-7zm0-2h6v-3H6.5a1.5 1.5 0 0 0 0 3H7v-2h6v2zm6-5V4H6v10.035A3.53 3.53 0 0 1 6.5 14H19zM7 5h2v2H7V5zm0 3h2v2H7V8zm0 3h2v2H7v-2z", fill: "rgba(118,131,144,1)" }))),
                    React.createElement("span", { className: 'mx-3' },
                        "Public repositories ",
                        React.createElement("b", null, profile.public_repos))),
                React.createElement("div", { style: { display: "flex", justifyContent: "left", gap: 10, marginTop: 5 } },
                    React.createElement("span", { style: { color: "#768390", paddingRight: 5 } },
                        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "16", height: "16" },
                            React.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }),
                            React.createElement("path", { d: "M6 10v10h13V10H6zm12-2h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2V7a6 6 0 1 1 12 0v1zm-2 0V7a4 4 0 1 0-8 0v1h8zm-9 3h2v2H7v-2zm0 3h2v2H7v-2zm0 3h2v2H7v-2z", fill: "rgba(118,131,144,1)" }))),
                    React.createElement("span", { className: 'mx-3' },
                        "Private repositories",
                        " ",
                        React.createElement("b", null, profile.total_private_repos || 6))))))) : (React.createElement("div", { style: { display: "block", justifyContent: "center", margin: 15 } },
        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "64", height: "64" },
            React.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586z", fill: "rgba(118,131,144,1)" })),
        React.createElement("p", null, " Profile not found")))));
};
export default GithubProfileCard;
