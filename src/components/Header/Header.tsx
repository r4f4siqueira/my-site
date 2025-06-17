import { Grid, GridItem } from '@chakra-ui/react';
import { HeaderMenu } from '../HeaderMenu/HeaderMenu';

export default function Header() {
    return (
        <Grid
            templateColumns={'repeat(2, 1fr)'}
            gap={[0, 1, 4, 4]}
            background={'bg.muted'}
            padding={1}
        >
            <GridItem />
            <GridItem>
                <HeaderMenu />
            </GridItem>
        </Grid>
    );
}
