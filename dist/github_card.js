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
import GithubProfileCard from "./github_card_profile.js";
import GithubRepoCard from "./github_card_repo.js";
const GithubCard = ({ name, repository, type, widht, height }) => {
    const [profile, setProfile] = useState(null);
    const [repo, setRepository] = useState(null);
    // const { name, repository, type, widht, height, useCache = false } = props
    useEffect(() => {
        let url;
        if (type === "user" || type === "profile") {
            url = `https://api.github.com/users/${name || "basskibo"}`;
        }
        else {
            url = `https://api.github.com/repos/${name || "basskibo"}/${repository || "github-user-repo-card"}`;
        }
        console.log("url \n\n");
        console.log(url);
        const fetchData = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                // const profileInLocaleStorage = localStorage.getItem("profile");
                let dataFetched;
                // if (!profileInLocaleStorage) {
                const response = yield axios.get(url
                // , {
                // 	headers: {
                // 		Authorization: "token 6888b5336f1fbc75edb8de9961846462e0e1c218",
                // 	},
                // }
                );
                // localStorage.setItem("profile", JSON.stringify(response.data));
                dataFetched = response.data;
                // } else {
                // profileFetched = JSON.parse(profileInLocaleStorage);
                // }
                if (type === "user" || type === "profile") {
                    setProfile(dataFetched);
                }
                else {
                    setRepository(dataFetched);
                }
                console.log(repo);
            }
            catch (error) {
                console.log("error", error);
            }
        });
        fetchData();
    }, []);
    return (React.createElement("div", { style: {
            width: widht || 300, height: height || 350, backgroundColor: "#22272E", color: "#768390", border: "1px solid gray",
            borderRadius: 10, padding: 10
        } },
        React.createElement(React.Fragment, null,
            " ",
            (profile && (type === "user" || type === "profile")) ? (React.createElement(GithubProfileCard, { html_url: profile.html_url, login: profile.login, avatar_url: profile.avatar_url, following: profile.following, followers: profile.followers, public_repos: profile.public_repos, total_private_repos: profile.total_private_repos, bio: profile.bio, location: profile.location })) : (React.createElement(React.Fragment, null))),
        React.createElement(React.Fragment, null, repo ? (React.createElement(GithubRepoCard, { html_url: repo.html_url, name: repo.name, description: repo.description, language: repo.language, stargazers_count: (repo === null || repo === void 0 ? void 0 : repo.stargazers_count) || 0 })) : React.createElement(React.Fragment, null))));
};
export default GithubCard;
