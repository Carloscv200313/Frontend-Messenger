import Image from "next/image";
export const Baymax = () => {
    return (
        <div className="flex justify-center items-center gap-8 bg-emerald-900 p-2 rounded-xl overflow-hidden">
            <h1 className="text-2xl font-extrabold font-serif text-center">Baymax</h1>
            <Image 
                src="/baymax.png" 
                alt="Description of the image" 
                width={1000} 
                height={563} 
                className="h-14 w-auto scale-150 " />
        </div>
    )
}
