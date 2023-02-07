import React from "react";
import Button from "@mui/material-next/Button";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const ThemeButton = () => {
  const buttonJS = false;
  return (
    <Button disabled={false}>
      {buttonJS ? <DarkModeIcon /> : <LightModeIcon />}
    </Button>
  );
};

export default ThemeButton;
