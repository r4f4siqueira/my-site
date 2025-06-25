'use client';

import { createContext, ReactNode, useEffect, useState } from 'react';
import { getDataReposGitHub, GitHubReposResponse } from '../../../utils/gitHub-api';

interface ProjectsContextInterface {
    gitHubReposData: Array<GitHubReposResponse>;
}

export const CreateProjectsContext = createContext<ProjectsContextInterface>({
    gitHubReposData: [],
});

export default function ProjectsContext({ children }: { children: ReactNode }) {
    const [gitHubReposData, setGitHubData] = useState<Array<GitHubReposResponse>>([]);

    useEffect(() => {
        async function getData() {
            const dados = (await getDataReposGitHub()) || [];
            setGitHubData(dados);
        }
        getData();
    }, []);

    return <CreateProjectsContext.Provider value={{ gitHubReposData }}>{children}</CreateProjectsContext.Provider>;
}
