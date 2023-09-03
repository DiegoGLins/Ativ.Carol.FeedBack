
import React from "react";
import Paragrafo from "../components/Paragrafo";



const Home: React.FC = () => {
  return (
    <>

      <div className='boxHome' >
        <div className="boxCenter">
          <Paragrafo conteudo={"Conheça as principais"} titulo={'BEM VINDO'} descricao={'Skills da nossa equipe'} />
        </div>
      </div>
    </>
  );
};

export default Home;
