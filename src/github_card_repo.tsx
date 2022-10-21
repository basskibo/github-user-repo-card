import React from 'react'
import { IRepository, ILanguage } from './github_card.interface';

const setLanguageColor = (language: string): ILanguage => {
    let dotStyle = {
        height: 10, width: 10, backgroundColor: "#bbb", borderRadius: "50%",
        display: "inline-block", marginTop: 4
    }
    switch (language) {
        case "TypeScript":
            return { ...dotStyle, backgroundColor: "#3178c6" };
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
    return (
        <>
            {repository ? (
                <div style={{ color: "#768390", padding: 5, marginLeft: 10 }}>
                    <a href={repository.html_url} target='_blank' rel='noreferrer'>
                        <div style={{ display: "flex", justifyContent: "left", padding: "10px 0" }}>
                            <span className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z" /><path d="M13 21v2.5l-3-2-3 2V21h-.5A3.5 3.5 0 0 1 3 17.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1h-7zm0-2h6v-3H6.5a1.5 1.5 0 0 0 0 3H7v-2h6v2zm6-5V4H6v10.035A3.53 3.53 0 0 1 6.5 14H19zM7 5h2v2H7V5zm0 3h2v2H7V8zm0 3h2v2H7v-2z" fill="rgba(118,131,144,1)" /></svg>
                            </span>
                            <span className="text" style={{ color: "#539BF5", fontWeight: "bold", fontSize: 25, padding: "5px 0", paddingLeft: 5, textAlign: "left" }}>
                                {repository.name}</span>
                        </div>


                        <div style={{ display: "flex", justifyContent: "left", flexWrap: "wrap", gap: 10, marginTop: 5, textAlign: "left" }}>
                            <span className='font-normal text-sm' style={{ fontSize: 15, color: "#768390" }}>
                                {repository.description}
                            </span>
                        </div>

                        <div style={{ display: "flex", justifyContent: "left", flexWrap: "wrap", gap: 10, marginTop: 15, color: "#768390", fontSize: 16 }}>
                            <div style={setLanguageColor(repository.language)}></div>
                            <div style={{ marginRight: 3, marginLeft: 0 }}>{repository.language}</div>

                            {repository.stargazers_count > 0 ? (
                                <span className="cardSpan">
                                    <span className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15" height="15"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 18.26l-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26zm0-2.292l4.247 2.377-.949-4.773 3.573-3.305-4.833-.573L12 5.275l-2.038 4.42-4.833.572 3.573 3.305-.949 4.773L12 15.968z" fill="rgba(118,131,144,1)" /></svg>                                    </span>
                                    <span className="text">{repository.stargazers_count}</span>
                                </span>
                            ) : (
                                <></>
                            )}
                            <span className="cardSpan">
                                <span className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9C2.121 6.88 6.608 3 12 3zm0 16a9.005 9.005 0 0 0 8.777-7 9.005 9.005 0 0 0-17.554 0A9.005 9.005 0 0 0 12 19zm0-2.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" fill="rgba(118,131,144,1)" /></svg>
                                </span>
                                <span className="text">{repository.watchers}</span>
                            </span>
                            <span className="cardSpan">
                                <span className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z" /><path d="M7.105 15.21A3.001 3.001 0 1 1 5 15.17V8.83a3.001 3.001 0 1 1 2 0V12c.836-.628 1.874-1 3-1h4a3.001 3.001 0 0 0 2.895-2.21 3.001 3.001 0 1 1 2.032.064A5.001 5.001 0 0 1 14 13h-4a3.001 3.001 0 0 0-2.895 2.21zM6 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM6 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm12 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" fill="rgba(118,131,144,1)" /></svg>                                </span>
                                <span className="text">{repository.forks_count}</span>
                            </span>
                        </div>
                    </a>
                </div >
            ) : (
                <></>
            )}
        </>
    )
}

export default GithubRepoCard