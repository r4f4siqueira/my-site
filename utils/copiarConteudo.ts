import { toaster } from '@/components/ui/toaster';

interface CopiarConteudoParams {
    conteudo: string;
    tituloToaster?: string;
}

export function copiarConteudo({ conteudo, tituloToaster }: CopiarConteudoParams) {
    toaster.create({
        title: tituloToaster || 'Copiado para a área de trasferência',
    });
    navigator.clipboard.writeText(conteudo);
}
