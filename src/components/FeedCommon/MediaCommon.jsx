import ReactPlayer from "react-player";
import React from "react";
import { Box } from "@mui/material";
export default function MediaCommon({ url, type = "video" }) {
  return (
    <>
      {type === "video" ? (
        <ReactPlayer url={url} width="100%" height="auto" controls playing />
      ) : (
        <Box display="flex" justifyContent="center" alignItems="center">
          <img src={url} alt={type} loading="lazy" width="100%" height="auto" />
        </Box>
      )}
    </>
  );
}
