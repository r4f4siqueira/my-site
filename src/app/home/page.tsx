import { Accordion, Grid, GridItem, Image } from '@chakra-ui/react';
import { LuChartBarStacked, LuTags } from 'react-icons/lu';
import LinksRedesSociais from './components/LinksRedesSociais';
import DevStacks from './components/DevStacks';
import Sobre from './components/Sobre';
import AcordionHome, { AccordionHomeType } from './components/AcordionHome';

const items: Array<AccordionHomeType> = [
    {
        value: 'Sobre',
        icon: <LuTags />,
        title: 'Sobre Mim',
        content: <Sobre />,
    },
    {
        value: 'Contato',
        icon: <LuChartBarStacked />,
        title: 'Contato',
        content: <LinksRedesSociais />,
    },
    {
        value: 'Stacks',
        icon: <LuChartBarStacked />,
        title: 'Colocar mais alguma coisa',
        content: <DevStacks />,
    },
];

export default function HomePage() {
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
                <Image
                    rounded="md"
                    h="200px"
                    w="200px"
                    fit="cover"
                    alt="Naruto Uzumaki"
                    src="https://bit.ly/naruto-sage"
                />
            </GridItem>

            <GridItem colSpan={[4, 4, 3, 3]}>
                <Accordion.Root
                    collapsible
                    defaultValue={['Sobre']}
                >
                    {items.map(AcordionHome)}
                </Accordion.Root>
            </GridItem>
        </Grid>
    );
}
