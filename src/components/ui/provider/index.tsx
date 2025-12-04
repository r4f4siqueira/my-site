'use client';

import dynamic from 'next/dynamic';

export const Provider = dynamic(() => import('./provider').then((mod) => mod.Provider), {
    ssr: false,
});
