import { Box, Button } from '@chakra-ui/react';
import Link from 'next/link';
import { ColorModeButton } from '../ui/color-mode';

export function HeaderMenu() {
    return (
        <Box
            display={'flex'}
            justifyContent={'end'}
            gap={[4, 4, 4, 8]}
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

            <ColorModeButton />
        </Box>
    );
}
