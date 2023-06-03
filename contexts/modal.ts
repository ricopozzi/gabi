import { atom } from "jotai";

interface AtomProps {
    isModalOpen: boolean;
    current: string;
}

export const ModalAtom = atom<AtomProps>({isModalOpen: false, current: 'Moda praia' })