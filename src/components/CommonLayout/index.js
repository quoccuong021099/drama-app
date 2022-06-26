import { Box } from "@mui/material";
import React from "react";
import HeaderCommon from "../Header";

export default function CommonLayout({ children }) {
  return (
    <Box sx={{ display: "flex" }}>
      <HeaderCommon />
      <Box component="main" sx={{ flexGrow: 1, ml: 1 }}>
        {children}
      </Box>
    </Box>
  );
}
