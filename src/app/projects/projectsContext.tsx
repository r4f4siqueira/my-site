'use client';

import { createContext, ReactNode, useEffect, useState } from 'react';
import { getDataReposGitHub } from '../../../utils/gitHub-api';

interface ProjectsContextInterface {
    gitHubReposData: Array<any>;
}

export const CreateMainContext = createContext<ProjectsContextInterface>({
    gitHubReposData: [],
});

export default function MainContext({ children }: { children: ReactNode }) {
    const [gitHubReposData, setGitHubData] = useState([]);

    useEffect(() => {
        async function getData() {
            const dados = (await getDataReposGitHub()) || [];
            setGitHubData(dados);
        }
        getData();
    }, []);

    return <CreateMainContext.Provider value={{ gitHubReposData }}>{children}</CreateMainContext.Provider>;
}
