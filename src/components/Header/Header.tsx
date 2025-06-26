import { Grid, GridItem, Image, VStack } from '@chakra-ui/react';
import { HeaderMenu } from '../HeaderMenu/HeaderMenu';

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
                    <Image
                        src={'imgs/RafaelLogo.png'}
                        alt="Logo"
                        boxSize="36px"
                        rounded={'md'}
                    />
                </GridItem>
                <GridItem colSpan={2}>
                    <HeaderMenu />
                </GridItem>
            </Grid>
        </VStack>
    );
}
