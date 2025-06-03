import { Box, Button } from '@chakra-ui/react';

export function HeaderMenu() {
    return (
        <Box
            display={'flex'}
            justifyContent={'space-evenly'}
        >
            <Button
                variant={'surface'}
                colorPalette={'blue'}
            >
                Links
            </Button>
            <Button
                variant={'surface'}
                colorPalette={'green'}
            >
                Projects
            </Button>
        </Box>
    );
}
