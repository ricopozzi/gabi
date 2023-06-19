import React from "react";
import roupariaLogo from "@/public/rouparia.svg"
import Image from "next/image";



export const Header: React.FC<any> = () => {
    return (
      <header className="w-full h-32 md:h-20 bg-gradient-to-br from-rose-200 via-rose-300 to-rose-400 flex items-center justify-center relative">
        <div
          id="avatar"
          className="w-32 h-32 rounded-full border  absolute -bottom-10  p-2"
        >
          <Image
            fill
            src={roupariaLogo}
            alt="Logo Rouparia Ilhabela moda feminina plussize"
            className="rounded-full"
          />
        </div>
      </header>
    );
}