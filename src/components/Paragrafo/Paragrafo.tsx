import React from "react";

interface ParagrafoProps {
  titulo: string;
  conteudo?: string;
  children?: React.ReactNode;
}

const Paragrafo: React.FC<ParagrafoProps> = ({
  titulo,
  conteudo,
  children,
}) => {
  return (
    <div
      style={{ display: "Flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1 style={{ color: "white", fontSize: "5rem", paddingTop: '70px' }}>{titulo}</h1>
      <p>{conteudo}</p>
      {children}
    </div>
  );
};

export default Paragrafo;
