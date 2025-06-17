import { Accordion, Grid, GridItem, Image } from '@chakra-ui/react';
import LinksRedesSociais from './components/LinksRedesSociais';
import DevStacks from './components/DevStacks';
import Sobre from './components/Sobre';
import AcordionHome, { AccordionHomeType } from './components/AcordionHome';
import { TbDeviceDesktopHeart } from 'react-icons/tb';
import { FaInfo } from 'react-icons/fa';
import { IoChatboxEllipsesOutline } from 'react-icons/io5';

const items: Array<AccordionHomeType> = [
    {
        value: 'Contato',
        icon: <IoChatboxEllipsesOutline />,
        title: 'Contato',
        content: <LinksRedesSociais />,
    },
    {
        value: 'Stacks',
        icon: <TbDeviceDesktopHeart />,
        title: 'Tecnologias',
        content: <DevStacks />,
    },
    {
        value: 'Sobre',
        icon: <FaInfo />,
        title: 'Sobre Mim',
        content: <Sobre />,
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
                    multiple
                    defaultValue={['Contato']}
                >
                    {items.map(AcordionHome)}
                </Accordion.Root>
            </GridItem>
        </Grid>
    );
}
