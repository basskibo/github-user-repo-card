/// <reference types="react" />
declare type mode = "user" | "repo";
interface Props {
    type: mode;
    name: string;
    repository: string;
    useCache: boolean;
    widht: number;
    height: number;
}
export declare function GithubCard(props: Props): JSX.Element;
export {};
