import { Accordion, Icon } from '@chakra-ui/react';
import { JSX } from '@emotion/react/jsx-runtime';

export interface AccordionHomeType {
    value: string;
    icon: JSX.Element;
    title: React.ReactNode;
    content: React.ReactNode;
}

export default function AcordionHome(item: AccordionHomeType, index?: number) {
    return (
        <Accordion.Item
            key={item.value || index}
            value={item.value}
        >
            <Accordion.ItemTrigger>
                <Icon
                    fontSize="lg"
                    color="fg.subtle"
                >
                    {item.icon}
                </Icon>
                {item.title}
                <Accordion.ItemIndicator />
            </Accordion.ItemTrigger>
            <Accordion.ItemContent>
                <Accordion.ItemBody>{item.content}</Accordion.ItemBody>
            </Accordion.ItemContent>
        </Accordion.Item>
    );
}
