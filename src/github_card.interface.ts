type Mode = "user" | "repo";


export interface IProfile {
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

export interface IProps {
    type: Mode;
    name: string;
    repository: string;
    useCache?: boolean;
    widht?: number;
    height?: number;
}