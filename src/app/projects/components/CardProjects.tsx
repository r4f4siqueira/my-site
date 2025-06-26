import { Card, Grid, GridItem, Stack, Text } from '@chakra-ui/react';
import { GitHubReposResponse } from '../../../../utils/gitHub-api';
import { GoRepoForked, GoStar } from 'react-icons/go';

export default function CardProjects(item: GitHubReposResponse, index?: number) {
    return (
        <GridItem
            key={index || item.id}
            colSpan={1}
        >
            <Card.Root
                height={'200px'}
                size={'sm'}
            >
                <Card.Body gap="2">
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Description lineClamp="5">{item.description || 'Sem descrição disponível.'}</Card.Description>
                </Card.Body>
                <Card.Footer justifyContent="flex-end">
                    <Grid
                        w={'100%'}
                        templateColumns="repeat(2, 1fr)"
                    >
                        <GridItem
                            colSpan={1}
                            w={'100%'}
                        >
                            <Stack
                                direction={'row'}
                                alignItems={'center'}
                                justifyContent={'start'}
                            >
                                <Text fontSize={'sm'}>{item.language}</Text>
                            </Stack>
                        </GridItem>

                        <GridItem colSpan={1}>
                            <Stack
                                direction={'row'}
                                alignItems={'center'}
                                justifyContent={'end'}
                            >
                                <GoStar />
                                {item.stargazers_count}
                                <GoRepoForked />
                            </Stack>
                        </GridItem>
                    </Grid>

                    {/* <Button variant="outline">View</Button>
                    <Button>Join</Button> */}
                </Card.Footer>
            </Card.Root>
        </GridItem>
    );
}
