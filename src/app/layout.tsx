import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Provider } from '@/components/ui/provider';
import Header from '@/components/Header/Header';
import { Box, Center } from '@chakra-ui/react';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Rafael Siqueira',
    description: 'I created this website at the beginning of my studies in next.js and I maintain it with some updates',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="pt-BR"
            suppressHydrationWarning
        >
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <Provider>
                    <Header />
                    <Center>
                        <Box
                            w={['100%', '100%', '90%', '80%']}
                            p={4}
                        >
                            {children}
                        </Box>
                    </Center>
                </Provider>
            </body>
        </html>
    );
}
