import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import CardVideo from "./CardVideo";

export default function FeaturedVideo() {
  return (
    <Box display="flex" maxWidth={345} p={1} px={2} overflow="auto">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6">Video đề xuất</Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <CardVideo />
            </Grid>
            <Grid item xs={12}>
              <CardVideo />
            </Grid>
            <Grid item xs={12}>
              <CardVideo />
            </Grid>
            <Grid item xs={12}>
              <CardVideo />
            </Grid>
            <Grid item xs={12}>
              <CardVideo />
            </Grid>
            <Grid item xs={12}>
              <CardVideo />
            </Grid>
            <Grid item xs={12}>
              <CardVideo />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
