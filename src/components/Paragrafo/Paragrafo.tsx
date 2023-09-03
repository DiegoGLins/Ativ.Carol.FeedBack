import React from "react";

interface ParagrafoProps {
  titulo: string;
  conteudo?: string;
  descricao: string;
}

const Paragrafo: React.FC<ParagrafoProps> = ({
  titulo,
  conteudo,
  descricao,
}) => {
  return (
    <div
      style={{ display: "Flex", flexDirection: "column", alignItems: "center" }}>
      <h1 style={{ color: "white", fontSize: "5rem", fontFamily: 'sans-serif', padding: '30px 0px 0px' }}>{titulo}</h1>
      <p className="content-P">{conteudo}</p>
      <p style={{ color: 'white' }} className="descricao-P">{descricao}</p>
    </div>
  );
};

export default Paragrafo;
