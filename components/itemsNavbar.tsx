"use client";

import { ModalAtom } from "@/contexts/modal";
import { CaretDown } from "@phosphor-icons/react";
import { useAtom } from "jotai";
import React from "react";
import { ItemsModal } from "./itemsModal";

export const ItemsNavbar: React.FC<any> = () => {
  const [modal, setModal] = useAtom(ModalAtom);

  return (
    <nav className="w-fit h-10 flex justify-center items-center">
      <button
        onClick={() =>
          setModal((current) => ({ ...current, isModalOpen: true }))
        }
        className="w-52 h-full rounded border-2 font-light flex items-center gap-x-2 justify-center"
      >
        {modal.current}
        <CaretDown />
      </button>
      {modal.isModalOpen && <ItemsModal />}
    </nav>
  );
};
