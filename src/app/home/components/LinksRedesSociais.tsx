import { Box, Text } from '@chakra-ui/react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';

const links = [
    { nome: 'Linkedin', titulo: 'Rafael Siqueira', icon: <FaLinkedin />, link: '', target: '' },
    { nome: 'GitHub', titulo: 'r4f4siqueira', icon: <FaGithub />, link: '', target: '' },
    { nome: 'Facebook', titulo: 'Rafael Siqueira', icon: <FaFacebook />, link: '', target: '' },
    { nome: 'Instagran', titulo: '@r4f4siqueira', icon: <FaInstagram />, link: '', target: '' },
    { nome: 'Gmail', titulo: 'r4f4siqueira@gmail.com', icon: <MdOutlineEmail />, link: '', target: '' },
];

export default function LinksRedesSociais() {
    return links.map((item) => (
        <Box
            key={item.nome}
            display={'flex'}
            flexDirection={'row'}
            alignItems={'center'}
            fontSize={32}
            justifyContent={'space-between'}
        >
            {item.icon}
            <Text>{item.titulo}</Text>
        </Box>
    ));
}
