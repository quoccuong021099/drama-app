import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Box, Card, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import ActionCommon from "../FeedCommon/ActionCommon";
import ContentCommon from "../FeedCommon/ContentCommon";
import HeaderCommon from "../FeedCommon/HeaderCommon";
import MediaCommon from "../FeedCommon/MediaCommon";

export default function Feed() {
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);

  const title = "Video mẫu Video mẫu Video mẫu  a".trim();
  const src =
    "https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-1/279772589_715536229597578_5525815957839818557_n.jpg?stp=c0.17.100.100a_dst-jpg_p100x100&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=rcQcFIXWHHIAX9YBlTA&_nc_ht=scontent.fdad3-5.fna&oh=00_AT-s7ulbV6abPRqFIuSrYHcRY1dGZcLgaJHH_2GKV6U57g&oe=62C44097";
  const time = "1 giờ trước";
  const name = "Quốc Cường";
  const url =
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
  const media =
    "https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/290130222_585673372914689_2856561206387996974_n.jpg?stp=cp1_dst-jpg_p843x403&_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=yrNrjeFonKQAX9mwq7G&_nc_oc=AQmqLXsh15SfO4LN_rodn-AbDAhT0BjCfdfhKiY3Z8TNUIUPHe5WBAN4Dxwo3KtOm4OtYh1Hu0Fe3qUJI5PGGSVo&_nc_ht=scontent.fdad3-1.fna&oh=00_AT_1548E9j84ZmoZC2dKNllqmqVPmJZxKgv0E_-LNltFDQ&oe=62C6FA06";

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
        src={src}
        name={
          <Typography
            variant="h6"
            sx={{
              fontSize: "17px",
              cursor: "pointer",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            {name}
          </Typography>
        }
        time={time}
        action={
          <IconButton aria-label="see more">
            <MoreHorizIcon />
          </IconButton>
        }
        size={48}
      />
      <ContentCommon title={title} />
      <MediaCommon url={media} type="img" />
      <ActionCommon like={like} dislike={dislike} handleLike={handleLike} />
    </Card>
  );
}
