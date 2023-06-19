"use client";

import { WhatsappLogo } from "@phosphor-icons/react";

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div
      onClick={() =>
        window.open(
          `https://api.whatsapp.com/send?phone=5512997100238&text=Ola!%20Vim%20pelo%20site.`
        )
      }
      className="fixed z-40 bottom-3 right-3 bg-emerald-200/80 text-emerald-900 flex items-center justify-center p-3 rounded-full backdrop-blur-sm"
    >
      <WhatsappLogo size={52} />
    </div>
  );
};
