import { Card, Grid, GridItem, Link, Stack, Text } from '@chakra-ui/react';
import { GitHubReposResponse } from '../../../../utils/gitHub-api';
import { GoIssueOpened, GoLinkExternal, GoRepoForked, GoStar } from 'react-icons/go';

export default function CardProjects(item: GitHubReposResponse, index?: number) {
    return (
        <GridItem
            key={index || item.id}
            colSpan={1}
        >
            <Card.Root
                height={'220px'}
                size={'sm'}
                _hover={{ border: 'solid 1px' }}
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
                                <Text
                                    fontSize={'sm'}
                                    title="Linguagem do Projeto"
                                >
                                    {item.language}
                                </Text>
                            </Stack>
                        </GridItem>

                        <GridItem colSpan={1}>
                            <Stack
                                direction={'row'}
                                alignItems={'center'}
                                justifyContent={'end'}
                            >
                                <GoStar title="Numero de estrelas" />
                                {item.stargazers_count}
                                <GoIssueOpened title="Issue Abertas" />
                                {item.open_issues}
                                {item.fork && <GoRepoForked title="Fork " />}
                                <Link
                                    href={item.svn_url}
                                    target="_blank"
                                >
                                    <GoLinkExternal title="Abrir no GitHub" />
                                </Link>
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
