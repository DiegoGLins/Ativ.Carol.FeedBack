import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Wrapper from "../components/Wrapper";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <NavBar title="Atividade Feedback" />
      <Wrapper>{children}</Wrapper>
    </>
  );
};
export default DefaultLayout;
