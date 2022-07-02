import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Link,
  Typography,
} from "@mui/material";
import { useState } from "react";
import ReactPlayer from "react-player";

export default function CardVideo() {
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const [isShowMore, setIsShowMore] = useState(false);

  const title = "Video mẫu Video mẫu Video mẫu  a".trim();

  const handleLike = (type) => {
    if (type === "like") {
      setLike(!like);
      setDislike(false);
    } else {
      setDislike(!dislike);
      setLike(false);
    }
  };

  const toggle = () => {
    setIsShowMore(!isShowMore);
  };

  const getRenderedItems = (items) => {
    if (isShowMore) {
      return items;
    }
    return items.slice(0, 30);
  };

  return (
    <Card variant="outlined">
      <CardHeader
        sx={{ p: 1, alignItems: "center" }}
        avatar={
          <Avatar
            src="https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-1/279772589_715536229597578_5525815957839818557_n.jpg?stp=c0.17.100.100a_dst-jpg_p100x100&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=rcQcFIXWHHIAX9YBlTA&_nc_ht=scontent.fdad3-5.fna&oh=00_AT-s7ulbV6abPRqFIuSrYHcRY1dGZcLgaJHH_2GKV6U57g&oe=62C44097"
            sx={{ width: 24, height: 24 }}
          />
        }
        title="Quốc Cường"
      />
      <CardContent sx={{ p: 1 }}>
        <Typography variant="body2" color="textSecondary" component="p">
          {getRenderedItems(title)}
          {title.length > 30 && (
            <>
              &nbsp;
              <Link component="button" variant="body2" onClick={toggle}>
                <span>{isShowMore ? "less" : "more"}</span>
              </Link>
            </>
          )}
        </Typography>
      </CardContent>
      <ReactPlayer
        url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        width="100%"
        height="auto"
        controls
      />
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
          {dislike ? <ThumbDownAltIcon /> : <ThumbDownOffAltIcon />}{" "}
          &nbsp;dislike
        </Button>
      </CardActions>
    </Card>
  );
}
