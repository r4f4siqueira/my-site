'use client';
import { Accordion, Grid, GridItem, Image } from '@chakra-ui/react';
import LinksRedesSociais from './components/LinksRedesSociais';
import DevStacks from './components/DevStacks';
import Sobre from './components/Sobre';
import AcordionHome, { AccordionHomeType } from './components/AcordionHome';
import { TbDeviceDesktopHeart } from 'react-icons/tb';
import { FaInfo } from 'react-icons/fa';
import { IoChatboxEllipsesOutline } from 'react-icons/io5';
import { useContext } from 'react';
import { CreateMainContext } from '../mainContext';

const items: Array<AccordionHomeType> = [
    {
        value: 'Contato',
        icon: <IoChatboxEllipsesOutline />,
        title: 'Minhas Redes Sociais',
        content: <LinksRedesSociais />,
    },
    {
        value: 'Stacks',
        icon: <TbDeviceDesktopHeart />,
        title: 'Minhas Habilidades',
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
                <Image
                    rounded="md"
                    boxSize={['200px', '200px', '165px', '270px']}
                    alt={gitHubData?.name || 'Rafael Siqueira'}
                    src={gitHubData?.avatar_url}
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
