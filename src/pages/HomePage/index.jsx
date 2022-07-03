import { Grid } from "@mui/material";
import React from "react";
import FeaturedVideo from "../../components/FeaturedVideo";
import Feed from "../../components/Feed";
import FeedV2 from "../../components/FeedV2";
import PostEditor from "../../components/PostEditor";

export default function HomePage() {
  return (
    <Grid container>
      <Grid item xs={4}>
        <FeaturedVideo />
      </Grid>
      <Grid item xs={8}>
        <Grid container p={2} px={10} spacing={2}>
          <Grid item xs={12}>
            <PostEditor />
          </Grid>
          <Grid item xs={12}>
            <FeedV2 />
          </Grid>
          <Grid item xs={12}>
            <Feed />
          </Grid>
          <Grid item xs={12}>
            <Feed />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
