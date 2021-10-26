import { Container, Toolbar } from "@mui/material";
import React from "react";
import PromoCard from "./PromoCardComponent";

export default function PromoShuffle() {
  return (
    <Container>
      <Toolbar />
      <PromoCard
        title="Test title"
        description="This will alow you to test the description"
        image="images/image1.jpg"
      />
    </Container>
  );
}
