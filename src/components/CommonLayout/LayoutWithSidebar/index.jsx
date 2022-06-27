import { Box } from "@mui/material";
import React from "react";
import SidebarLeft from "./SidebarLeft";
import SidebarRight from "./SidebarRight";

export default function CommonLayout({ children }) {
  return (
    <Box sx={{ display: "flex" }}>
      <SidebarLeft />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
        }}
      >
        {children}
      </Box>
      <SidebarRight />
    </Box>
  );
}
