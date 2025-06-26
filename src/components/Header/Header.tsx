import { Box, Grid, GridItem, Image, VStack } from '@chakra-ui/react';
import { HeaderMenu } from '../HeaderMenu/HeaderMenu';
import Link from 'next/link';

export default function Header() {
    return (
        <VStack background={'bg.muted'}>
            <Grid
                templateColumns={'repeat(3, 1fr)'}
                gap={[0, 1, 4, 4]}
                padding={1}
                maxWidth={'1920px'}
                w={'100%'}
            >
                <GridItem colSpan={1}>
                    <Box w={'36px'}>
                        <Link href={'/'}>
                            <Image
                                src={'imgs/RafaelLogo.png'}
                                alt="Logo"
                                rounded={'md'}
                            />
                        </Link>
                    </Box>
                </GridItem>
                <GridItem colSpan={2}>
                    <HeaderMenu />
                </GridItem>
            </Grid>
        </VStack>
    );
}
