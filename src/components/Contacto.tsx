import Image from 'next/image';
import React from 'react'
interface Contactos {
    nombre: string;
    id: string;
    urlFoto:string;
}
interface Props {
    contacto: Contactos
}
export const Contacto = ({ contacto }: Props) => {
    return (
        <div className='bg-transparent text-white p-2 text-lg font-sans flex gap-4 justify-center items-center cursor-pointer'>
            <Image src={contacto.urlFoto}  alt={`Imagen de perfil de ${contacto.nombre}`}width={50} height={50} className='rounded-full'/>
            <p className='border-b-2 border-white line-clamp-2'>{contacto.nombre}</p>
        </div>
    )
}
