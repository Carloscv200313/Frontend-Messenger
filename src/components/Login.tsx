"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
export const Login = () => {
    const router = useRouter()
    const [formData, setFormData] = useState({
        user: "",
        password: "",
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await fetch("http://localhost:4000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
        const data = await response.json();
        //console.log("Datos enviados:", formData);
        //console.log("Respuesta del servidor:", data);
        if(data._id){
            //const nombre = data.nombre.split(" ").filter((_, i) => i === 0 || i === 2).join("-").toUpperCase();
            //console.log(nombre)
            localStorage.setItem("idUser",data._id)
            router.push("/mensajes")
        }else{
            alert(data.message)
        }
    };
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 text-black">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 p-6 bg-white shadow-md rounded-lg w-80"
            >
                <h2 className="text-lg font-semibold text-center">Iniciar Sesión</h2>
                <label className="flex flex-col">
                    Usuario:
                    <input
                        type="text"
                        name="user"
                        placeholder="Ingrese su usuario"
                        value={formData.user}
                        onChange={handleChange}
                        className="border p-2 rounded-md"
                        required
                    />
                </label>
                <label className="flex flex-col">
                    Contraseña:
                    <input
                        type="password"
                        name="password"
                        placeholder="Ingrese su contraseña"
                        value={formData.password}
                        onChange={handleChange}
                        className="border p-2 rounded-md"
                        required
                    />
                </label>
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
                >
                    Ingresar
                </button>
            </form>
        </div>
    )
}
