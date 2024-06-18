// export async function generateStaticParams() {
//     return [{ locale: 'en' }, { locale: 'kn' }]
// }

export default async function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
        </>
    );
}