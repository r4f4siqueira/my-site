import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Provider } from '@/components/ui/provider';
import Header from '@/components/header/header';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'r4f4siqueira',
    description: 'Rafael Siqueira',
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
                    {children}
                </Provider>
            </body>
        </html>
    );
}
