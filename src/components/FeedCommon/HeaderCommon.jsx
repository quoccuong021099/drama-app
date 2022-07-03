import PublicIcon from "@mui/icons-material/Public";
import { Avatar, CardHeader, Typography } from "@mui/material";
import React from "react";

export default function HeaderCommon({ action, name, time, src, size }) {
  return (
    <CardHeader
      sx={{ p: 1, alignItems: "center" }}
      avatar={
        <Avatar
          src={src}
          sx={{ width: size, height: size, cursor: "pointer" }}
        />
      }
      action={action}
      title={name}
      subheader={
        time && (
          <Typography
            variant="caption"
            component="div"
            sx={{ display: "flex", alignItems: "center", fontSize: "13px" }}
          >
            {time}
            &nbsp;
            <PublicIcon sx={{ fontSize: "13px" }} />
          </Typography>
        )
      }
    />
  );
}
