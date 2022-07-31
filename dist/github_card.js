var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiUsers, FiMapPin } from "react-icons/fi";
import { RiGitRepositoryCommitsLine, RiGitRepositoryPrivateLine, } from "react-icons/ri";
export function GithubCard(props) {
    const [profile, setProfile] = useState(null);
    const { name, repository, type, widht, height, useCache = false } = props;
    useEffect(() => {
        let url;
        if (type === "user") {
            url = `https://api.github.com/users/${name || "basskibo"}`;
        }
        else {
            url = `https://api.github.com/users/${name || "basskibo"}/${repository}`;
        }
        const fetchData = () => __awaiter(this, void 0, void 0, function* () {
            try {
                // const profileInLocaleStorage = localStorage.getItem("profile");
                let profileFetched;
                // if (!profileInLocaleStorage) {
                const response = yield axios.get(url
                // , {
                // 	headers: {
                // 		Authorization: "token 6888b5336f1fbc75edb8de9961846462e0e1c218",
                // 	},
                // }
                );
                // localStorage.setItem("profile", JSON.stringify(response.data));
                profileFetched = response.data;
                // } else {
                // profileFetched = JSON.parse(profileInLocaleStorage);
                // }
                setProfile(profileFetched);
            }
            catch (error) {
                console.log("error", error);
            }
        });
        // const existingProfile = window.localStorage.getItem("github_profile") || "basskibo";
        // if (!existingProfile) {
        fetchData();
        // } else {
        //     setProfile(existingProfile);
        // }
    }, []);
    return (React.createElement("div", { style: {
            width: 350, height: 320, backgroundColor: "#22272E", color: "#768390", border: "1px solid gray",
            borderRadius: 10, padding: 10
        } }, profile ? (React.createElement("div", null,
        React.createElement("a", { href: profile.html_url, target: '_blank', rel: 'noreferrer' },
            React.createElement("p", { className: 'text-white font-extrabold text-xl mb-3 inline-flex', style: {
                    color: "#539BF5", display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "0 auto"
                } },
                "@",
                profile.login),
            React.createElement("div", null,
                React.createElement("img", { alt: 'profile avatar', 
                    // layout="fill"
                    // width="50" height="50"
                    src: profile.avatar_url, style: {
                        width: 100, height: 100, borderRadius: 400 / 2,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "0 auto"
                    }, className: 'w-full h-40 border border-gray-400' })),
            React.createElement("div", { className: '  mt-1' },
                React.createElement("p", { style: { fontStyle: "italic" } }, profile.bio)),
            React.createElement("div", { className: '  mt-1' },
                React.createElement(FiUsers, { className: 'h-full mt-0.1 inline-flex' }),
                " ",
                React.createElement("span", { className: 'mx-3' },
                    "Following ",
                    React.createElement("b", null, profile.following)),
                React.createElement("span", null,
                    "Followers ",
                    React.createElement("b", null, profile.followers))),
            React.createElement("div", { className: '  mt-1' },
                React.createElement(FiMapPin, { className: 'h-full mt-0.1 inline-flex' }),
                " ",
                React.createElement("span", { className: 'mx-3' }, profile.location)),
            React.createElement("div", { className: '  mt-1' },
                React.createElement(RiGitRepositoryCommitsLine, { className: 'h-full mt-0.1 inline-flex' }),
                " ",
                React.createElement("span", { className: 'mx-3' },
                    "Public repositories ",
                    React.createElement("b", null, profile.public_repos))),
            React.createElement("div", { className: '  mt-1' },
                React.createElement(RiGitRepositoryPrivateLine, { className: 'h-full mt-0.1 inline-flex' }),
                " ",
                React.createElement("span", { className: 'mx-3' },
                    "Private repositories",
                    " ",
                    React.createElement("b", null, profile.total_private_repos || 6)))))) : (React.createElement(React.Fragment, null))));
}
