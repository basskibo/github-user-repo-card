import React, { useState, useEffect } from "react";
import axios from "axios";

import { IProfile, IRepository, IProps } from "./github_card.interface";
import GithubProfileCard from "./github_card_profile";
import GithubRepoCard from "./github_card_repo";

const GithubCard = ({ name, repository, type, widht, height }: IProps) => {
    const [profile, setProfile] = useState<IProfile | null>(null);
    const [repo, setRepository] = useState<IRepository | null>(null);

    // const { name, repository, type, widht, height, useCache = false } = props


    useEffect(() => {
        let url: string;
        if (type === "user" || type === "profile") {
            url = `https://api.github.com/users/${name || "basskibo"}`;
        } else {
            url = `https://api.github.com/repos/${name || "basskibo"}/${repository || "github-user-repo-card"}`;
        }
        console.log("url \n\n")
        console.log(url)


        const fetchData = async () => {
            try {
                // const profileInLocaleStorage = localStorage.getItem("profile");
                let dataFetched;
                // if (!profileInLocaleStorage) {
                const response = await axios.get(
                    url
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
                } else {
                    setRepository(dataFetched)
                }
                console.log(repo)
            } catch (error) {
                console.log("error", error);
            }
        };


        fetchData();

    }, []);

    return (
        <div style={{
            width: widht || 300, height: height || 350, backgroundColor: "#22272E", color: "#768390", border: "1px solid gray",
            borderRadius: 10, padding: 10
        }}>
            <> {
                (profile && (type === "user" || type === "profile")) ? (
                    <GithubProfileCard html_url={profile.html_url} login={profile.login} avatar_url={profile.avatar_url} following={profile.following}
                        followers={profile.followers} public_repos={profile.public_repos} total_private_repos={profile.total_private_repos} bio={profile.bio} location={profile.location}></GithubProfileCard>
                ) : (
                    <></>
                )

            }</>
            <>{repo ? (<GithubRepoCard html_url={repo.html_url} name={repo.name} description={repo.description} language={repo.language} stargazers_count={repo?.stargazers_count || 0}></GithubRepoCard>
            ) : <></>}</>

        </div >
    );
}




export default GithubCard;