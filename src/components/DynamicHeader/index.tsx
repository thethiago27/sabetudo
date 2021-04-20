import Head  from "next/head";

interface DynamicHeaderProps {
    title: string;
}

export function DynamicHeader({ title }: DynamicHeaderProps) {
    return (
        <Head>
            <title>Sabe Tudo | {title}</title>
        </Head>
    )
}