type Mode = "user" | "profile" | "repo";

type Licence = {
    name: string;
    key: string;
}

export interface IProfile {
    html_url: string;
    login: string;
    name?: string;
    avatar_url: string;
    following: string;
    followers: string;
    location?: string;
    public_repos: number;
    public_gists: number;
    bio?: string;
}



export interface IRepository {
    html_url: string;
    name: string;
    description: string;
    language: string;
    stargazers_count: number;
    watchers?: number;
    forks_count?: number;
    default_branch?: string;
    license?: Licence

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

