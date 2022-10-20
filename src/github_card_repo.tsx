import React from 'react'
import { IRepository, ILanguage } from './github_card.interface';

const setLanguageColor = (language: string): ILanguage => {
    let dotStyle = {
        height: 10, width: 10, backgroundColor: "#bbb", borderRadius: "50%",
        display: "inline-block", marginTop: 4
    }
    switch (language) {
        case "TypeScript":
            return {
                ...dotStyle,
                backgroundColor: "#3178c6"
            };
        case "Shell":
            return { ...dotStyle, backgroundColor: "#89e051" };
        case "JavaScript":
            return { ...dotStyle, backgroundColor: "#f1e05a" };
        case "HTML":
            return { ...dotStyle, backgroundColor: "#e34c26" };
        case "CSS":
            return { ...dotStyle, backgroundColor: "#563d7c" };
        case "Java":
            return { ...dotStyle, backgroundColor: "#b07219" };
        default:
            return { ...dotStyle, backgroundColor: "#f1e05a" };

    }
};

const GithubRepoCard = (repository: IRepository) => {
    console.log("GRC", repository)
    return (
        <>
            {repository ? (
                <div style={{ color: "#768390", padding: 5, marginLeft: 10 }}>
                    <a href={repository.html_url} target='_blank' rel='noreferrer'>

                        <div style={{ display: "flex", justifyContent: "left", padding: "10px 0" }}>
                            <span style={{ color: "#768390", paddingRight: 5, padding: "4px 0" }} >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22"><path fill="none" d="M0 0h24v24H0z" /><path d="M13 21v2.5l-3-2-3 2V21h-.5A3.5 3.5 0 0 1 3 17.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1h-7zm0-2h6v-3H6.5a1.5 1.5 0 0 0 0 3H7v-2h6v2zm6-5V4H6v10.035A3.53 3.53 0 0 1 6.5 14H19zM7 5h2v2H7V5zm0 3h2v2H7V8zm0 3h2v2H7v-2z" fill="rgba(118,131,144,1)" /></svg>
                            </span>
                            <span
                                style={{ color: "#539BF5", fontWeight: "bold", fontSize: 25, padding: "5px 0", paddingLeft: 5, textAlign: "left" }}>
                                {repository.name}
                            </span>
                        </div>


                        <div style={{ display: "flex", justifyContent: "left", flexWrap: "wrap", gap: 10, marginTop: 5, textAlign: "left" }}>
                            <span className='font-normal text-sm' style={{ fontSize: 15, color: "#768390" }}>
                                {repository.description}
                            </span>
                        </div>

                        <div style={{ display: "flex", justifyContent: "left", flexWrap: "wrap", gap: 10, marginTop: 15, color: "#768390", fontSize: 17 }}>
                            <div style={setLanguageColor(repository.language)}></div>
                            <div className='ml-0 mr-3' style={{ marginRight: 3, marginLeft: 0 }}>{repository.language}</div>

                            {repository.stargazers_count > 0 ? (
                                <div>
                                    <span style={{ paddingTop: 5, paddingRight: 1 }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928z" fill="rgba(118,131,144,1)" /></svg>                                </span>
                                    <span style={{ fontSize: 18, fontWeight: "bold" }}>{repository.stargazers_count}</span>
                                </div>
                            ) : (
                                <></>
                            )}
                        </div>
                        {/* <div className='grid xl:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 p-2'>
                    <span className='mr-3'>
                       <GoStar className='h-full mt-0.1 inline-flex' /> Stars:{" "}
                       <b>{repository.stargazers_count}</b>
                    </span>
                    <span className='mr-3'>
                       <GoRepoForked className='h-full mt-0.1 inline-flex' />{" "}
                       Forks: <b>{repository.forks_count}</b>
                    </span>
                    <span className='mr-3'>
                       <GoEye className='h-full mt-0.1 inline-flex' />{" "}
                       Watchers: <b>{repository.watchers}</b>
                    </span>
                    <span>
                       <GoOrganization className='h-full mt-0.1 inline-flex' />{" "}
                       Subscribers: <b>{repository.subscribers_count}</b>
                    </span>
                 </div> */}
                        {/* <div className='grid  lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 p-2'> */}

                        {/* <div class='relative h-32 w-32 ...'>
                    <div class=' bottom-0 right-0 h-16 w-16 ...'>
                       <SiGithub />{" "}
                    </div>
                 </div> */}

                        {/* <div className='  mt-1'>
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
                 </div> */}
                    </a>
                </div >
            ) : (
                <></>
            )}
        </>
    )
}

export default GithubRepoCard