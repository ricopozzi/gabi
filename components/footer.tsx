"use client";

import {
  FacebookLogo,
  InstagramLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";
import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-neutral-900 h-42 flex flex-col p-4 text-white">
      <div className="px-2">
        <p className="text-white font-semibold text-xl">Rouparia Ilhabela</p>
        <p className="text-sm">Rua Morro da cruz, 34, Perequê, Ilhabela</p>
      </div>

      <div className="items-center flex justify-center gap-x-4 mt-2">
        <InstagramLogo
          onClick={() => window.open("https://instagram.com/roupariailhabela")}
          size={30}
        />
        <FacebookLogo
          onClick={() =>
            window.open(
              "https://www.facebook.com/profile.php?id=100033974808867"
            )
          }
          size={30}
        />
        <WhatsappLogo
          onClick={() =>
            window.open(
              "https://api.whatsapp.com/send?phone=5512997100238&text=Ola!%20Vim%20pelo%20site."
            )
          }
          size={30}
        />
      </div>
    </footer>
  );
};
