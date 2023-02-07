import React from "react";
import Home from "./Home";
import Logo from "./Logo";
import Project from "./Project";
import Certificates from "./Certificate";
import Contact from "./Contact";
import ThemeButton from "./ThemeButton";
import Style from "./styles/RootHeader.module.scss";

const RootHeader = () => {
  return (
    <span className={Style.div}>
      <Logo />
      <Home />
      <Project />
      <Certificates />
      <Contact />
      <ThemeButton />
    </span>
  );
};

export default RootHeader;
