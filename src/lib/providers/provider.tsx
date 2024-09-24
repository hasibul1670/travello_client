"use client";

import React from "react";
import {Provider} from "react-redux";
import {ThemeProvider} from "@mui/material";
import {store} from "@/redux/reduxConfig/store";
import {lightTheme, darkTheme} from "../theme/theme";
import {useSelector} from "react-redux";
import {RootState} from "@/redux/reduxConfig/store"; // Path to store

const Providers = ({children}: {children: React.ReactNode}) => {
  const mode = useSelector((state: RootState) => state.theme.mode);

  const theme = React.useMemo(() => (mode === "light" ? lightTheme : darkTheme), [mode]);

  return (
  
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
  
  );
};

export default Providers;
