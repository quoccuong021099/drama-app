import { Card, Typography } from "@mui/material";
import React, { useState } from "react";
import ActionCommon from "../../FeedCommon/ActionCommon";
import ContentCommon from "../../FeedCommon/ContentCommon";
import HeaderCommon from "../../FeedCommon/HeaderCommon";
import MediaCommon from "../../FeedCommon/MediaCommon";

export default function CardVideo() {
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);

  const title = "Video mẫu Video mẫu Video mẫu  a".trim();
  const name = "Quốc Cường";
  const src =
    "https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-1/279772589_715536229597578_5525815957839818557_n.jpg?stp=c0.17.100.100a_dst-jpg_p100x100&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=rcQcFIXWHHIAX9YBlTA&_nc_ht=scontent.fdad3-5.fna&oh=00_AT-s7ulbV6abPRqFIuSrYHcRY1dGZcLgaJHH_2GKV6U57g&oe=62C44097";
  const url =
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

  const handleLike = (type) => {
    if (type === "like") {
      setLike(!like);
      setDislike(false);
    } else {
      setDislike(!dislike);
      setLike(false);
    }
  };

  return (
    <Card variant="outlined">
      <HeaderCommon
        size={24}
        src={src}
        name={
          <Typography
            variant="h6"
            sx={{
              fontSize: "14px",
              cursor: "pointer",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            {name}
          </Typography>
        }
      />
      <ContentCommon title={title} />
      <MediaCommon url={url} />
      <ActionCommon like={like} dislike={dislike} handleLike={handleLike} />
    </Card>
  );
}
