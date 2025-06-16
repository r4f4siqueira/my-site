import { Box, Button } from '@chakra-ui/react';
import Link from 'next/link';

export function HeaderMenu() {
    return (
        <Box
            display={'flex'}
            justifyContent={'space-evenly'}
        >
            <Link href={'/'}>
                <Button
                    variant={'surface'}
                    colorPalette={'blue'}
                >
                    Sobre
                </Button>
            </Link>

            <Link href={'/projects'}>
                <Button
                    variant={'surface'}
                    colorPalette={'green'}
                >
                    Projetos
                </Button>
            </Link>
        </Box>
    );
}
