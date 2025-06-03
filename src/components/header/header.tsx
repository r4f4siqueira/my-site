import { Box } from '@chakra-ui/react';
import { ColorModeButton } from '../ui/color-mode';

export default function Header() {
    return (
        <Box
            width={'100%'}
            background={'bg.muted'}
        >
            <ColorModeButton />
        </Box>
    );
}
