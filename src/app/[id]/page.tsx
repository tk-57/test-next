import Form from "./form";

export const runtime = "edge";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return (
        <main>
            <h1>
                Page {id}
            </h1>
            <Form />
        </main>
    );
}
