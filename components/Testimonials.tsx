import React from "react";

interface TestProps {
  text: string;
}

const Testimonial: React.FC<TestProps> = ({ text }) => {
  return (
    <p className="p-4 rounded-2xl text-lg text-center font-light border text-gray-900 bg-gray-100">
      {text}
    </p>
  );
};

export const Testimonials: React.FC = () => {
  return (
    <section className="w-full flex flex-col gap-8">
      <p className="w-full text-center text-2xl font-semibold mb-2">
        Depoimentos de clientes
      </p>
      <Testimonial text="Uma loja que verdadeiramente me representa, com lindas peças que valorizam meu jeito" />
      <Testimonial text="Loja com looks perfeitos para cada tipo de corpo, com atendimento sincero que eleva a autoestima" />
      <Testimonial text="Minhas filhas não confiavam no meu gosto por roupas, até começar a comprar aí! Agora elas usam as roupas da Rouparia." />
    </section>
  );
};
