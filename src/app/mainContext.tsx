'use client';

import { createContext, ReactNode, useEffect, useState } from 'react';
import { getDataUserGitHub, GitHubUserResponse } from '../../utils/gitHub-api';

interface MainContextInterface {
    gitHubData: GitHubUserResponse | undefined;
}

export const CreateMainContext = createContext<MainContextInterface>({
    gitHubData: {
        avatar_url: '',
        url: '',
        html_url: '',
        repos_url: '',
        name: '',
        location: '',
        bio: '',
        public_repos: 0,
        public_gists: 0,
        followers: 0,
        following: 0,
    },
});

export default function MainContext({ children }: { children: ReactNode }) {
    const [gitHubData, setGitHubData] = useState<GitHubUserResponse>();

    useEffect(() => {
        async function getData() {
            const dados = await getDataUserGitHub();
            setGitHubData(dados);
        }
        getData();
    }, []);

    return <CreateMainContext.Provider value={{ gitHubData }}>{children}</CreateMainContext.Provider>;
}
