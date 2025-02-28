import type { Metadata } from "next";
import "../globals.css";
import { BarraContactos } from "@/components/barraContactos";

export const metadata: Metadata = {
    title: "Baymax",
    description: "",
};

export default function NombreLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section className="flex flex-row">
            <BarraContactos />
            {children}
        </section>
    );
}
