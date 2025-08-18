import { Box, Link, Text } from '@chakra-ui/react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaRegCopy } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { MdOutlineEmail } from 'react-icons/md';
import { copiarConteudo } from '../../../../utils/copiarConteudo';
import { JSX } from '@emotion/react/jsx-runtime';

interface LinkRedesSociais {
    nome: string;
    titulo: string;
    icon: JSX.Element;
    link: string;
}
const links: Array<LinkRedesSociais> = [
    {
        nome: 'Linkedin',
        titulo: 'Rafael Siqueira',
        icon: <FaLinkedin />,
        link: 'https://www.linkedin.com/in/r4f4siqueira',
    },
    {
        nome: 'GitHub',
        titulo: 'r4f4siqueira',
        icon: <FaGithub />,
        link: 'https://github.com/r4f4siqueira',
    },
    {
        nome: 'Facebook',
        titulo: 'Rafael Siqueira',
        icon: <FaFacebook />,
        link: 'https://www.facebook.com/r4f4siqueira',
    },
    {
        nome: 'Instagran',
        titulo: '@r4f4siqueira',
        icon: <FaInstagram />,
        link: 'https://www.instagram.com/r4f4siqueira/',
    },
    {
        nome: 'Gmail',
        titulo: 'r4f4siqueira@gmail.com',
        icon: <MdOutlineEmail />,
        link: '',
    },
];

export default function LinksRedesSociais() {
    return links.map((item, index) => (
        <Box
            key={index}
            display={'flex'}
            flexDirection={'row'}
            alignItems={'center'}
            fontSize={24}
            justifyContent={'space-between'}
            layerStyle="outline.subtle"
            _hover={{ colorPalette: 'cyan' }}
            padding={1}
        >
            {item.link ? (
                <Link
                    width={'100%'}
                    padding={2}
                    gap={[5]}
                    _hover={{ textDecoration: 'none' }}
                    transition={'all 0.2s'}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {item.icon}
                    <Text>{item.titulo}</Text>
                </Link>
            ) : (
                <Link
                    width={'100%'}
                    padding={2}
                    gap={[5]}
                    _hover={{ textDecoration: 'none' }}
                    transition={'all 0.2s'}
                    onClick={() =>
                        copiarConteudo({ conteudo: 'r4f4siqueira@gmail.com', tituloToaster: 'Email copiado!' })
                    }
                    title="Copiar"
                >
                    {item.icon}
                    <Text>{item.titulo}</Text>
                </Link>
            )}

            <Box fontSize={20}>{item.link ? <FiExternalLink /> : <FaRegCopy />}</Box>
        </Box>
    ));
}
