import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import { Button, CardActions } from "@mui/material";
import React from "react";
export default function ActionCommon({ handleLike, like, dislike }) {
  return (
    <CardActions disableSpacing>
      <Button
        size="small"
        onClick={() => handleLike("like")}
        color={like ? "primary" : "inherit"}
        sx={{ textTransform: "capitalize", fontWeight: "bold" }}
      >
        {like ? <ThumbUpIcon /> : <ThumbUpOutlinedIcon />} &nbsp; like
      </Button>
      <Button
        size="small"
        onClick={() => handleLike("dislike")}
        color={dislike ? "primary" : "inherit"}
        sx={{ textTransform: "capitalize", fontWeight: "bold" }}
      >
        {dislike ? <ThumbDownAltIcon /> : <ThumbDownOffAltIcon />} &nbsp;dislike
      </Button>
    </CardActions>
  );
}
