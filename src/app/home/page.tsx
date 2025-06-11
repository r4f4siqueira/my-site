import { Accordion, Box, Grid, GridItem, Icon, Image, Text } from '@chakra-ui/react';
import { LuChartBarStacked, LuTags } from 'react-icons/lu';

const items = [
    {
        value: 'Sobre',
        icon: <LuTags />,
        title: 'Sobre Mim',
        //REVIEW - Separar o conteudo em um componente
        content: (
            <Box>
                <Text>
                    Minha jornada profissional teve início em um ambiente desafiador, trabalhando na feira livre da
                    cidade. Essa experiência me proporcionou um desenvolvimento pessoal significativo, fortalecendo
                    valores como responsabilidade, proatividade e adaptabilidade. Ao ingressar na área de tecnologia,
                    pude aplicar esses aprendizados e me destacar em projetos complexos.
                </Text>
                <Text>
                    Iniciei como suporte técnico em uma software house, após um ano como suporte e buscando evoluir
                    dentro da empresa iniciei a faculdade de Engenharia de Software. Fui contratado pela universidade no
                    penúltimo ano de faculdade e meu primeiro trabalho como desenvolvedor foi desenvolver uma plataforma
                    para publicação de notícias e artigos do site da universidade, um dos meus maiores desafios foi
                    aprender a usar frameworks como React e Next.js, que superei através de pesquisas em fóruns, lendo
                    documentação técnica e o mais importante compartilhando meu conhecimento com a equipe. Como
                    resultado, consegui um cargo novo onde o foco está em levantar requisitos e ajudar os novos
                    desenvolvedores do departamento.
                </Text>
                <Text>
                    Sou um profissional apaixonado por tecnologia, com forte capacidade de aprendizado e grande
                    interesse em acompanhar as últimas tendências do mercado. Prezo por um ambiente de trabalho dinâmico
                    e inovador, onde posso contribuir com meu conhecimento e experiência. Alguns dizem que minhas
                    habilidades em interpretar os problemas e levantar requisitos, combinadas com minha capacidade de
                    comunicação, me tornam um excelente profissional.
                </Text>
            </Box>
        ),
    },
    {
        value: 'Contato',
        icon: <LuChartBarStacked />,
        title: 'Contato',
        content: 'Colocar o Componente contendo os contatos',
    },
    {
        value: 'mais',
        icon: <LuChartBarStacked />,
        title: 'Colocar mais alguma coisa',
        content: 'Colocar o componente com mais informações',
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
                justifyItems={'center'}
            >
                <Image
                    border="1px solid red"
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
                    {items.map((item) => (
                        <Accordion.Item
                            key={item.value}
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
                            </Accordion.ItemTrigger>
                            <Accordion.ItemContent>
                                <Accordion.ItemBody>{item.content}</Accordion.ItemBody>
                            </Accordion.ItemContent>
                        </Accordion.Item>
                    ))}
                </Accordion.Root>
            </GridItem>
        </Grid>
    );
}
