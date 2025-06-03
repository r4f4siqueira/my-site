import { Grid, GridItem } from '@chakra-ui/react';
import { ColorModeButton } from '../ui/color-mode';
import { HeaderMenu } from '../HeaderMenu/HeaderMenu';

export default function Header() {
    return (
        <Grid
            templateColumns={'repeat(3, 1fr)'}
            gap={4}
            background={'bg.muted'}
            padding={1}
        >
            <GridItem
                display={'flex'}
                justifyContent={'center'}
            >
                <ColorModeButton />
            </GridItem>

            <GridItem>
                <HeaderMenu />
            </GridItem>

            <GridItem
                display={'flex'}
                justifyContent={'center'}
            >
                <ColorModeButton />
            </GridItem>
        </Grid>
    );
}
