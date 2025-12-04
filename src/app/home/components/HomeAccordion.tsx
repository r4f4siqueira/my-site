'use client';

import { Accordion } from '@chakra-ui/react';
import LinksRedesSociais from './LinksRedesSociais';
import DevStacks from './DevStacks';
import Sobre from './Sobre';
import AcordionHome, { AccordionHomeType } from './AcordionHome';
import { TbDeviceDesktopHeart } from 'react-icons/tb';
import { FaInfo } from 'react-icons/fa';
import { IoChatboxEllipsesOutline } from 'react-icons/io5';

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

export default function HomeAccordion() {
    return (
        <Accordion.Root
            collapsible
            multiple
            defaultValue={['Contato']}
        >
            {items.map((item) => (
                <AcordionHome
                    key={item.value}
                    {...item}
                />
            ))}
        </Accordion.Root>
    );
}
