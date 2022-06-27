import { Box } from "@mui/material";
import React from "react";
import FeaturedVideo from "../../components/FeaturedVideo";
import Feed from "../../components/Feed";

export default function PersonalWall() {
  return (
    <Box sx={{ display: "flex" }}>
      <FeaturedVideo />
      <Feed />
    </Box>
  );
}
