import React from 'react'
import { IProfile } from "./github_card.interface"

const GithubProfileCard = (profile: IProfile) => {
    return (
        <>
            {
                profile ? (
                    <div style={{ color: "#768390" }}>
                        <a href={profile.html_url} target='_blank' rel='noreferrer'>
                            <p className='text-white font-extrabold text-xl mb-3 inline-flex'
                                style={{
                                    color: "#FFF" || "#539BF5", display: "flex",
                                    justifyContent: "center",
                                    fontWeight: "bold",
                                    fontSize: 25,
                                    alignItems: "center",
                                    margin: "0 auto",
                                    textDecoration: "none"

                                }}>
                                {profile.name}
                            </p><p className='text-white font-extrabold text-xl mb-3 inline-flex'
                                style={{
                                    color: "#768390" || "#539BF5", display: "flex",
                                    justifyContent: "center",
                                    fontWeight: "bold",
                                    fontSize: 20,
                                    alignItems: "center",
                                    margin: "0 auto",
                                    textDecoration: "none"

                                }}>@{profile.login}
                            </p>
                            <div>
                                <img
                                    alt='profile avatar'

                                    src={profile.avatar_url}
                                    style={{
                                        width: 150, height: 150, borderRadius: 400 / 2,
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        margin: "10px auto"
                                    }}
                                    className='w-full h-40 border border-gray-400'
                                />
                            </div>
                            <div style={{ color: "#cecece", fontSize: 15, paddingRight: 5, margin: "5px 10px" }}>
                                <div className='  mt-1'>

                                    <p style={{ fontStyle: "italic", color: "#768390" }}>
                                        {profile.bio ? profile.bio : "No bio..."}
                                    </p>
                                </div >
                                <div style={{ display: "flex", justifyContent: "left", flexWrap: "wrap", gap: 10, marginTop: 15 }}>
                                    <span style={{ color: "#768390", paddingRight: 5 }} >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                    </span>
                                    <span>
                                        Following <b>{profile.following}</b>
                                    </span>
                                    <span>
                                        Followers <b>{profile.followers}</b>
                                    </span>
                                </div>
                                <div style={{ display: "flex", justifyContent: "left", gap: 10, marginTop: 5 }}>
                                    {profile.location ? <span style={{ color: "#768390", paddingRight: 5 }} >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                            className="feather feather-map-pin" ><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                    </span> : <></>}
                                    <span className='mx-3'>{profile.location}</span>
                                </div>
                                <div style={{ display: "flex", justifyContent: "left", gap: 10, marginTop: 5 }}>
                                    <span style={{ color: "#768390", paddingRight: 5 }} >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z" /><path d="M13 21v2.5l-3-2-3 2V21h-.5A3.5 3.5 0 0 1 3 17.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1h-7zm0-2h6v-3H6.5a1.5 1.5 0 0 0 0 3H7v-2h6v2zm6-5V4H6v10.035A3.53 3.53 0 0 1 6.5 14H19zM7 5h2v2H7V5zm0 3h2v2H7V8zm0 3h2v2H7v-2z" fill="rgba(118,131,144,1)" /></svg>

                                    </span>
                                    <span className='mx-3'>
                                        Public repositories <b>{profile.public_repos}</b>
                                    </span>
                                </div>
                                <div style={{ display: "flex", justifyContent: "left", gap: 10, marginTop: 5 }}>
                                    <span style={{ color: "#768390", paddingRight: 5 }} >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path fill="none" d="M0 0h24v24H0z" /><path d="M23 12l-7.071 7.071-1.414-1.414L20.172 12l-5.657-5.657 1.414-1.414L23 12zM3.828 12l5.657 5.657-1.414 1.414L1 12l7.071-7.071 1.414 1.414L3.828 12z" fill="rgba(118,131,144,1)" /></svg>                                    </span>
                                    <span className='mx-3'>
                                        Public gist{" "}
                                        <b>{profile.public_gists || 0}</b>
                                    </span>
                                </div>
                            </div>

                        </a >
                    </div >
                ) : (
                    <div style={{ display: "block", justifyContent: "center", margin: 15 }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="64" height="64"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586z" fill="rgba(118,131,144,1)" /></svg
                        >
                        <p> Profile not found</p>

                    </div>
                )}
        </ >)
}

export default GithubProfileCard