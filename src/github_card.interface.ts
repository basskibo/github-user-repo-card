type Mode = "user" | "profile" | "repo";


export interface IProfile {
    html_url: string;
    login: string;
    avatar_url: string;
    following: string;
    followers: string;
    location?: string;
    public_repos: number;
    total_private_repos: number;
    bio?: string;
}



export interface IRepository {
    html_url: string;
    name: string;
    description: string;
    language: string;
    stargazers_count: number;

}



export interface IProps {
    type: Mode;
    name: string;
    repository: string;
    useCache?: boolean;
    widht?: number;
    height?: number;
}


export interface ILanguage {
    backgroundColor: string;
    height: number;
    width: number;
    borderRadius: string;
    display: string;
}

