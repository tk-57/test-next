export const runtime = "edge";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return <h1>Page {id}</h1>;
}
