"use client";

import { ModalAtom } from "@/contexts/modal";
import { useAtom } from "jotai";
import React, { useEffect } from "react";

const buttonsArray = [
  {
    text: 'Todos'
  },
  {
    text: "Moda praia",
  },
  {
    text: "Bikinis",
  },
  {
    text: "Frio",
  },
  {
    text: "Roupa íntima",
  },
];

const ButtonItem: React.FC<(typeof buttonsArray)[0]> = ({ text }) => {
  const [_, setModal] = useAtom(ModalAtom);

  return (
    <button
      onClick={() =>
        setModal((curr) => ({ isModalOpen: false, current: text }))
      }
      className="px-5 py-1 border rounded bg-rose-50 border-rose-900 text-rose-900"
    >
      {text}
    </button>
  );
};

export const ItemsModal: React.FC<any> = () => {
  const [modal] = useAtom(ModalAtom);

  return (
    <div className="fixed left-0 top-0 z-50 w-screen h-screen bg-black/10 backdrop-blur-sm flex items-center justify-center px-4">
      <section className="w-full bg-white rounded-md py-10 flex flex-col">
        <p className="font-bold text-3xl text-gray-800 text-center w-full">
          Categorias
        </p>

        <main className="w-[95%] mt-5 mx-auto flex items-center justify-center gap-3 flex-wrap">
          {buttonsArray.map((btn, index) => (
            <ButtonItem key={`buttonItem-${index}`} text={btn.text} />
          ))}
        </main>
      </section>
    </div>
  );
};
