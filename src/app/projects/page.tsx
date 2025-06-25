'use client';
import { Grid, GridItem, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { CreateProjectsContext } from './projectsContext';

export default function ProjectsPage() {
    const { gitHubReposData } = useContext(CreateProjectsContext);

    return (
        <Grid
            templateColumns={['repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)']}
            gap={[1, 2, 3, 3]}
            alignItems={'center'}
        >
            {gitHubReposData &&
                gitHubReposData?.map((repo) => (
                    <GridItem
                        key={repo.id}
                        colSpan={1}
                        border={'solid red'}
                    >
                        <Text>{repo.name}</Text>
                        <Text>{repo.language}</Text>
                        <Text>{repo.description}</Text>
                        <Text>{repo.open_issues}</Text>
                        <Text>{repo.stargazers_count}</Text>
                        <Text>{repo.whatchers}</Text>
                    </GridItem>
                ))}
        </Grid>
    );
}
