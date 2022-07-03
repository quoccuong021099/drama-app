import { CardContent, Link, Typography } from "@mui/material";
import React, { useState } from "react";

export default function ContentCommon({ title }) {
  const [isShowMore, setIsShowMore] = useState(false);

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
  );
}
