"use server";

export async function addition(a: number, b: number): Promise<number> {
    "use server";
    return a + b;
}