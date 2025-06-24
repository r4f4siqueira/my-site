export interface GitHubUserResponse {
    avatar_url: string;
    url: string;
    html_url: string;
    repos_url: string;
    name: string;
    location: string;
    bio: string;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
}

export async function getDataUserGitHub(): Promise<GitHubUserResponse | undefined> {
    try {
        const response = await fetch('https://api.github.com/users/r4f4siqueira');
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        return response.json();
    } catch (error) {
        console.error(error);
    }
}

export async function getDataReposGitHub() {
    try {
        const response = await fetch('https://api.github.com/users/r4f4siqueira/repos?sort=updated&direction=desc');
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        return response.json();
    } catch (error) {
        console.error(error);
    }
}
