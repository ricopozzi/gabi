"use client";

import { WhatsappLogo } from "@phosphor-icons/react";
import Image, {ImageProps} from "next/image";
import React, {
  Dispatch,
  SetStateAction,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";
import { AnimatePresence, Variants, motion, useAnimate } from "framer-motion";

interface ProductCardProps {
  title: string;
  description: string;
  imageUrl: string;
  sizes: string[];
  paginationState: number;
  index: number
}

interface PCSelected {
  sizes: string[];
  title: string;
  setSelected: Dispatch<SetStateAction<boolean>>;
}

const ProductCardSelected: React.FC<PCSelected> = ({
  title,
  sizes,
  setSelected,
}) => {
  const [selectedSize, setSelectedSize] = useState<string>();


  const sortSizes = () => {
    const sorted = sizes
    return sorted
  }
 
  const link = `https://api.whatsapp.com/send?phone=5512997100238&text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20escolhi%3A%20%20${title}%0A-%20TAMANHO%3A%20${selectedSize}%20Gostaria%20de%20ter%20mais%20informa%C3%A7%C3%B5es.`;
  return (
    <motion.div
      initial={{ opacity: 0.4, translateY: "50%" }}
      animate={{ opacity: 1, translateY: "0%" }}
      exit={{ opacity: 0, translateY: "-50%" }}
      style={{}}
      className="w-full h-full flex flex-col justify-center gap-4 rounded bg-gray-50 relative"
    >
      <button
        onClick={() => setSelected(false)}
        className="mr-auto text-lg font-medium text-neutral-800"
      >
        Voltar
      </button>
      <p className="text-xl font-semibold">{title}</p>

      <section className="flex flex-col mt-2">
        <p className="font-light">Selecione o tamanho que você deseja:</p>
        <div className="w-full flex gap-x-2 justify-center mt-3 items-center">
          {sortSizes()?.map((item, index) => (
            <div
              key={`SizEKEy-${index}`}
              onClick={() => setSelectedSize(item)}
              className={`px-7 py-2 border bg-gray-100 rounded font-medium uppercase ${
                selectedSize === item
                  ? "border-rose-500 text-rose-500"
                  : "border-gray-200 text-neutral-700"
              } duration-100`}
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <button
        onClick={() => window.open(link)}
        disabled={selectedSize !== undefined ? false : true}
        className="w-full h-12 rounded bg-rose-500 text-white font-medium mt-5 flex items-center gap-x-3 justify-center text-lg disabled:opacity-50 duration-100"
      >
        Eu quero <WhatsappLogo size={26} />
      </button>
    </motion.div>
  );
};


const ImageForwarded = forwardRef<HTMLImageElement, ImageProps>(
  function Wrapper(props, ref) {
    return <Image {...props} ref={ref} />
  }
)

const MotionImage = motion(ImageForwarded, {forwardMotionProps: false})

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  imageUrl,
  sizes,
  paginationState,
  index
}) => {
  const [selected, setSelected] = useState<boolean>(false);
  const [imageClick, setImageClick] = useState<boolean>(false)
  const containerRef = useRef<HTMLDivElement>(null)


  const imageVariants: Variants = {
    hidden: {
      zIndex: 0,
      top: 0,
      translateY: 0
    },
    open: {
      height: containerRef.current?.offsetHeight,
      zIndex: 100,
      position: 'absolute',
      top: -10,
      translateY: -50
    }
  }

useEffect(() => {
  setImageClick(false)
}, [paginationState])

  return (
    <motion.div 
    initial={{opacity: .5}}
    animate={{opacity: 1}}
    transition={{
      delay: .3 * index
    }}
    ref={containerRef}
    className="flex flex-col w-full min-h-[28rem] rounded border bg-gray-50 shadow-sm p-4 relative">
      <AnimatePresence>
        {selected ? (
          <ProductCardSelected
            sizes={sizes}
            title={title}
            setSelected={setSelected}
          />
        ) : (
          <>
            <p className="text-xl font-semibold">{title}</p>
            <motion.div
            className="relative w-full h-56 mt-5">
              <MotionImage
                src={imageUrl}
                onClick={() => setImageClick(!imageClick)}
                initial={'hidden'}
                animate={imageClick ? 'open': 'hidden'}
                variants={imageVariants}
                transition={{
                  type: 'tween',
           
                }}
                alt="Foto do produto"
                className="object-cover object-center rounded-lg absolute"
                fill
              />
            </motion.div>
            <p className="text-sm font-light text-gray-700 mt-5">
              {description}
            </p>

            <section className="flex flex-col mt-2">
              <p className="font-light">Tamanhos disponíveis:</p>
              <div className="w-full flex gap-x-2 justify-start items-center">
                {sizes?.map((item, index) => (
                  <div
                    key={`SizEKEy-${index}`}
                    className="px-3 py-[2px] border bg-gray-100 rounded uppercase "
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <button
              onClick={() => setSelected(true)}
              className="w-full h-12 rounded bg-rose-500 text-white font-medium mt-5 flex items-center gap-x-3 justify-center text-lg"
            >
              Eu quero
            </button>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
