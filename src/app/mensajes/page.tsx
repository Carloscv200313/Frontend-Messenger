"use client"
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        const id = localStorage.getItem("idUser");
        console.log(id);

        const response = async () => {
            const datos = await fetch("http://localhost:4000/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id: id }), // ✅ Enviar como objeto
            });

            const data = await datos.json();
            console.log(data);
        };

        response();
    }, []);

    return (
        <div>
            <h1>Mensajes</h1>
        </div>
    );
}
