import { Grid, GridItem } from '@chakra-ui/react';
import { HeaderMenu } from '../HeaderMenu/HeaderMenu';

export default function Header() {
    return (
        <Grid
            templateColumns={'repeat(3, 1fr)'}
            gap={[0, 1, 4, 4]}
            background={'bg.muted'}
            padding={1}
        >
            <GridItem colSpan={1} />
            <GridItem colSpan={2}>
                <HeaderMenu />
            </GridItem>
        </Grid>
    );
}
