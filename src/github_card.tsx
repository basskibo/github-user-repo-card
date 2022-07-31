import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiUsers, FiMapPin } from "react-icons/fi";
import { SiGithub } from "react-icons/si"
import {
    RiGitRepositoryCommitsLine,
    RiGitRepositoryPrivateLine,
} from "react-icons/ri";



type mode = "user" | "repo";
interface Profile {
    html_url: string;
    login: string;
    avatar_url: string;
    following: string;
    followers: string;
    location: string;
    public_repos: number;
    total_private_repos: number;
    bio: string;
}

interface Props {
    type: mode;
    name: string;
    repository: string;
    useCache: boolean;
    widht: number;
    height: number;
}

export function GithubCard(props: Props) {
    const [profile, setProfile] = useState<Profile | null>(null);
    const { name, repository, type, widht, height, useCache = false } = props

    useEffect(() => {
        let url: string;
        if (type === "user") {
            url = `https://api.github.com/users/${name || "basskibo"}`;
        } else {
            url = `https://api.github.com/users/${name || "basskibo"}/${repository}`;
        }


        const fetchData = async () => {
            try {
                // const profileInLocaleStorage = localStorage.getItem("profile");
                let profileFetched;
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
                profileFetched = response.data;
                // } else {
                // profileFetched = JSON.parse(profileInLocaleStorage);
                // }
                setProfile(profileFetched);
            } catch (error) {
                console.log("error", error);
            }
        };

        // const existingProfile = window.localStorage.getItem("github_profile") || "basskibo";

        // if (!existingProfile) {
        fetchData();
        // } else {
        //     setProfile(existingProfile);
        // }
    }, []);

    return (
        <div style={{
            width: 350, height: 320, backgroundColor: "#22272E", color: "#768390", border: "1px solid gray",
            borderRadius: 10, padding: 10
        }}>
            {
                profile ? (
                    <div>
                        <a href={profile.html_url} target='_blank' rel='noreferrer'>
                            <p className='text-white font-extrabold text-xl mb-3 inline-flex'
                                style={{
                                    color: "#539BF5", display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    margin: "0 auto"
                                }}>

                                {/* <SiGithub className='' />  */}@{profile.login}
                            </p>
                            <div>
                                <img
                                    alt='profile avatar'
                                    // layout="fill"
                                    // width="50" height="50"
                                    src={profile.avatar_url}
                                    style={{
                                        width: 100, height: 100, borderRadius: 400 / 2,
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        margin: "0 auto"
                                    }}

                                    className='w-full h-40 border border-gray-400'
                                />
                            </div>

                            <div className='  mt-1'>
                                <p style={{ fontStyle: "italic" }}>
                                    {profile.bio}
                                </p>


                            </div>
                            <div className='  mt-1'>
                                <FiUsers className='h-full mt-0.1 inline-flex' />{" "}
                                <span className='mx-3'>
                                    Following <b>{profile.following}</b>
                                </span>
                                <span>
                                    Followers <b>{profile.followers}</b>
                                </span>
                            </div>
                            <div className='  mt-1'>
                                <FiMapPin className='h-full mt-0.1 inline-flex' />{" "}
                                <span className='mx-3'>{profile.location}</span>
                            </div>
                            <div className='  mt-1'>
                                <RiGitRepositoryCommitsLine className='h-full mt-0.1 inline-flex' />{" "}
                                <span className='mx-3'>
                                    Public repositories <b>{profile.public_repos}</b>
                                </span>
                            </div>
                            <div className='  mt-1'>
                                <RiGitRepositoryPrivateLine className='h-full mt-0.1 inline-flex' />{" "}
                                <span className='mx-3'>
                                    Private repositories{" "}
                                    <b>{profile.total_private_repos || 6}</b>
                                </span>
                            </div>
                        </a>
                    </div >
                ) : (
                    <></>
                )}
        </div >
    );
}


