export declare class GitRepo {
    host: string;
    user: string;
    repo: string;
    accessToken: string;
    sshUrl: string;
    httpsUrl: string;
    constructor(stringArg: string, tokenArg?: string);
}
