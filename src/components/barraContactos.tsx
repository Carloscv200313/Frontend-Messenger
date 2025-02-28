"use client"
import { useEffect, useState } from "react";
import { Baymax } from "./Baymax";
import { Contacto } from './Contacto';
interface Contactos {
    nombre: string;
    id: string;
    urlFoto: string;
}
export const BarraContactos = () => {
    const [contactos, setContactos] = useState<Contactos[]>([])
    useEffect(() => {
        const id = sessionStorage.getItem("idUser");
        //console.log(id);
        const response = async () => {
            const respuesta = await fetch("http://localhost:4000/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id: id }), // ✅ Enviar como objeto
            });

            const data = await respuesta.json();
            console.log(data);
            setContactos(data)
        };
        response();
    }, []);
    return (
        <div className="h-screen bg-[#111b21] w-80 p-2">
            <Baymax />
            <div className="mt-4">
                {
                    contactos.map(contacto => (
                        <div key={contacto.id}>
                            <Contacto contacto={contacto} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

