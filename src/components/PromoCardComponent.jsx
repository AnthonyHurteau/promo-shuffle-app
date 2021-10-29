import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

export default function PromoCard(props) {
  return (
    <Card sx={{ maxWidth: 345, margin: "2px" }}>
      <CardMedia
        component="img"
        height="140"
        image={props.image}
        alt="img" />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div">
          {props.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
