'use client';
import { Grid, GridItem, Image, Skeleton } from '@chakra-ui/react';
import { useContext } from 'react';
import { CreateMainContext } from '../mainContext';
import HomeAccordion from './components/HomeAccordion';

export default function HomePage() {
    const { gitHubData } = useContext(CreateMainContext);

    return (
        <Grid
            templateColumns="repeat(4, 1fr)"
            gap={3}
            alignItems={'center'}
        >
            <GridItem
                colSpan={[4, 4, 1, 1]}
                display={'flex'}
                justifyContent={['center', 'center', 'initial', 'initial']}
            >
                {gitHubData?.avatar_url ? (
                    <Image
                        rounded="md"
                        boxSize={['200px', '200px', '165px', '270px']}
                        alt={gitHubData?.name || 'Rafael Siqueira'}
                        src={gitHubData?.avatar_url}
                    />
                ) : (
                    <Skeleton
                        rounded="md"
                        boxSize={['200px', '200px', '165px', '270px']}
                    />
                )}
            </GridItem>

            <GridItem colSpan={[4, 4, 3, 3]}>
                <HomeAccordion />
            </GridItem>
        </Grid>
    );
}
