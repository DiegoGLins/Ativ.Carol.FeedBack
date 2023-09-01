import React from "react";
import NavBar from "../components/NavBar";
import Wrapper from "../components/Wrapper";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <NavBar />
      <Wrapper>{children}</Wrapper>
    </>
  );
};
export default DefaultLayout;
