'use client';
import { Grid } from '@chakra-ui/react';
import { useContext } from 'react';
import { CreateProjectsContext } from './projectsContext';
import CardProjects from './components/CardProjects';

export default function ProjectsPage() {
    const { gitHubReposData } = useContext(CreateProjectsContext);

    return (
        <Grid
            templateColumns={['repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)']}
            gap={[1, 2, 3, 3]}
            alignItems={'center'}
        >
            {gitHubReposData && gitHubReposData.map(CardProjects)}
        </Grid>
    );
}
