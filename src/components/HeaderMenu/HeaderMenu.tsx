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
                    Links
                </Button>
            </Link>

            <Link href={'/projects'}>
                <Button
                    variant={'surface'}
                    colorPalette={'green'}
                >
                    Projects
                </Button>
            </Link>
        </Box>
    );
}
