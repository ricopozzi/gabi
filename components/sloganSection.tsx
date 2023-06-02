import Image from "next/image";
import React from "react";


export const SloganSection: React.FC<any> = () => {

    return (
        <div className="w-full flex flex-col gap-3" >
            <div className="w-11/12 mx-auto h-72 relative" >
            <Image src="https://picsum.photos/seed/picsum/600/500" className="object-center" alt="O padrão aqui é você" fill />
            </div>

            <p className="text-center text-5xl mt-2 text-gray-700 uppercase leading-[3.5rem]" >Aqui <span className="underline decoration-8 underline-offset-1 decoration-rose-900" >você</span> é o padrão</p>
        </div>
    )
}