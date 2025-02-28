import Image from "next/image";

export default function Home() {
    return (
        <div className="flex flex-col justify-center items-center w-full h-screen bg-[#222e36] text-center p-8">
            {/* Contenedor Principal */}
            <div className="flex flex-col items-center gap-2 max-w-5xl mb-8">
                <h1 className="text-7xl font-mono text-white">Bienvenido a Baymax</h1>
                <p className="text-xl font-serif px-10 text-gray-300">
                    Bienvenido a Baymax, la plataforma de chat que combina seguridad y simplicidad. 
                    Conéctate sin preocuparte por tu privacidad y disfruta de comunicaciones encriptadas y confiables.
                </p>
                <Image 
                    src="/baymax.gif" 
                    alt="Chat Seguro en Baymax" 
                    width={640} 
                    height={640} 
                    className="h-80 w-auto"
                />
            </div>

            {/* Texto Final Asegurado en la Parte Inferior */}
            <div className="pb-8">
                <p className="text-lg font-serif text-gray-400">
                    📢 Chats encriptados 🔒 | 🧑‍💻 Interfaz moderna | 🚀 Rápido y eficiente
                </p>
            </div>
        </div>
    );
}
