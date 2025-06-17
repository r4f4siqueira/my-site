import { Badge, Stack, Table } from '@chakra-ui/react';
import { JSX } from '@emotion/react/jsx-runtime';
import {
    BiLogoCPlusPlus,
    BiLogoCss3,
    BiLogoFirebase,
    BiLogoGit,
    BiLogoGithub,
    BiLogoHtml5,
    BiLogoJavascript,
    BiLogoNodejs,
    BiLogoPostgresql,
    BiLogoReact,
    BiLogoSass,
    BiLogoTypescript,
    BiLogoVisualStudio,
    BiLogoWindows,
} from 'react-icons/bi';
import { FaDatabase, FaUbuntu } from 'react-icons/fa';
import { IoLogoFigma } from 'react-icons/io5';
import { RiJavaLine, RiNextjsFill } from 'react-icons/ri';
import { SiAndroidstudio, SiInsomnia, SiManjaro, SiNestjs, SiNotion, SiSwagger, SiTrello } from 'react-icons/si';
import { TbBrandNetbeans } from 'react-icons/tb';

interface stack {
    nome: string;
    color: string;
    icon?: JSX.Element;
}
interface TecnologiasProps {
    nome: string;
    stacks: Array<stack>;
}
const tecnologias: Array<TecnologiasProps> = [
    {
        nome: 'Linguagem',
        stacks: [
            { nome: 'JavaScript', color: '#FFD600', icon: <BiLogoJavascript /> },
            { nome: 'TypeScript', color: '#1677C7', icon: <BiLogoTypescript /> },
            { nome: 'Java', color: '#F44336', icon: <RiJavaLine /> },
            { nome: 'C++', color: '#32BDEF', icon: <BiLogoCPlusPlus /> },
        ],
    },
    {
        nome: 'Frameworks',
        stacks: [
            { nome: 'React', color: '#53C1DE', icon: <BiLogoReact /> },
            { nome: 'React Native', color: '#C822FF', icon: <BiLogoReact /> },
            { nome: 'Nest.js', color: '#ed365a', icon: <SiNestjs /> },
            { nome: 'Next.js', color: '#828282', icon: <RiNextjsFill /> },
        ],
    },
    {
        nome: 'CI/CD',
        stacks: [
            { nome: 'Git', color: '#F4511E', icon: <BiLogoGit /> },
            { nome: 'GitHub', color: '#828282', icon: <BiLogoGithub /> },
        ],
    },
    {
        nome: 'Banco de Dados',
        stacks: [
            { nome: 'PostgreSQL', color: '#32648D', icon: <BiLogoPostgresql /> },
            { nome: 'Firebase Database', color: '#F57F17', icon: <BiLogoFirebase /> },
            { nome: 'Firebird', color: '#F4230A', icon: <FaDatabase /> },
        ],
    },
    {
        nome: 'Sistema Operacional',
        stacks: [
            { nome: 'Windows', color: '#03A9F4', icon: <BiLogoWindows /> },
            { nome: 'Ubuntu', color: '#D74615', icon: <FaUbuntu /> },
            { nome: 'Manjaro', color: '#35bfa4', icon: <SiManjaro /> },
        ],
    },
    {
        nome: 'Ferramentas',
        stacks: [
            { nome: 'Visual Studio Code', color: '#0288D1', icon: <BiLogoVisualStudio /> },
            { nome: 'NetBeans', color: '#0288D1', icon: <TbBrandNetbeans /> },
            { nome: 'Android Studio', color: '#7CB342', icon: <SiAndroidstudio /> },
            { nome: 'Swagger', color: '#85ea2d', icon: <SiSwagger /> },
            { nome: 'Insomnia', color: '#00C853', icon: <SiInsomnia /> },
            { nome: 'Trello', color: '#1E88E5', icon: <SiTrello /> },
            { nome: 'Figma', color: '#E64A19', icon: <IoLogoFigma /> },
            { nome: 'Notion', color: '#828282', icon: <SiNotion /> },
        ],
    },
    {
        nome: 'Outras Tecnologias',
        stacks: [
            { nome: 'Node', color: '#388E3C', icon: <BiLogoNodejs /> },
            { nome: 'HTML5', color: '#E65100', icon: <BiLogoHtml5 /> },
            { nome: 'CSS', color: '#0277BD', icon: <BiLogoCss3 /> },
            { nome: 'SASS', color: '#C76495 ', icon: <BiLogoSass /> },
        ],
    },
];

export default function DevStacks() {
    return (
        <Stack>
            <Table.Root
                size="sm"
                showColumnBorder
            >
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeader>Tipo</Table.ColumnHeader>
                        <Table.ColumnHeader>Stack</Table.ColumnHeader>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {tecnologias.map((item, index) => (
                        <Table.Row key={index}>
                            <Table.Cell>{item.nome}</Table.Cell>
                            <Table.Cell key={index}>
                                {item.stacks.map((stack, index) => (
                                    <Badge
                                        margin={1}
                                        fontSize={'md'}
                                        padding={1}
                                        key={index}
                                        color={'blackAlpha.900'}
                                        backgroundColor={stack.color}
                                    >
                                        {stack.icon}
                                        {stack.nome}
                                    </Badge>
                                ))}
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>
        </Stack>
    );
}
