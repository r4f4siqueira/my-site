import { ReactNode } from 'react';
import ProjectsContext from './projectsContext';

export default function ProjectsLayout({ children }: { children: ReactNode }) {
    return <ProjectsContext>{children}</ProjectsContext>;
}
