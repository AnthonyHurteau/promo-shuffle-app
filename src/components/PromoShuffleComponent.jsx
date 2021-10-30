import React, { useState, useEffect } from "react";
import styles from "./PromoShuffle.module.css";
import {
  Container,
  Toolbar,
  Button,
  Grid,
  Box,
  CircularProgress,
} from "@mui/material";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";

import PromoCard from "./PromoCardComponent";
import { getCardProps } from "../helpers/CardHelper";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function PromoShuffle({ reset, setReset }) {
  const [shuffleIndex, setShuffleIndex] = useState(0);
  const [shuffleStart, setShuffleStart] = useState(false);
  const [shuffleDone, setshuffleDone] = useState(false);
  const [shuffleResult, setShuffleResult] = useState();

  const cards = getCardProps();

  function shuffle() {
    setShuffleStart(true);
    const shuffleSpeed = 250;

    shuffling(2);

    function shuffling(currentShuffle) {
      currentShuffle--;
      for (let i = 1; i <= cards.length; i++) {
        setTimeout(() => {
          setShuffleIndex(i - 1);
          if (i === cards.length && currentShuffle !== 0) {
            setTimeout(shuffling(currentShuffle), shuffleSpeed);
          } else if (i === cards.length && currentShuffle === 0) {
            setTimeout(shufflingDone(), shuffleSpeed);
          }
        }, i * shuffleSpeed);
      }
    }

    function shufflingDone() {
      const result = cards[Math.floor(Math.random() * cards.length)];
      setShuffleResult(result);
      setshuffleDone(true);
    }
  }

  useEffect(() => {
    if (reset) {
      setShuffleStart(false);
      setshuffleDone(false);
      setShuffleResult(null);
    }
    return () => {
      setReset(false);
    };
  }, [reset, setReset]);

  return (
    <Container
      sx={{ height: "calc(100vh - 56px)", position: "relative", top: "56px" }}
      className={styles.imageFadeIn}
    >
      <Toolbar />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        alignContent={shuffleStart && shuffleDone ? "center" : null}
        sx={{ height: "75%" }}
      >
        <Grid
          item
          xs="auto"
          sm={6}>
          {shuffleDone ? (
            shuffleResult ? (
              <Box
                className={styles.imageFadeIn}
                sx={{ width: "345px" }}>
                <PromoCard
                  title={shuffleResult.title}
                  description={shuffleResult.description}
                  image={shuffleResult.image}
                />
              </Box>
            ) : null
          ) : shuffleStart ? (
            <Box sx={{ overflow: "hidden" }}>
              {cards.map((c, i) => {
                return i === shuffleIndex ? (
                  <Box
                    key={`box${i}`}
                    className={styles.imageSlide}
                    sx={{ width: "345px" }}
                  >
                    <PromoCard
                      key={`card${i}`}
                      title={c.title}
                      description={c.description}
                      image={c.image}
                    />
                  </Box>
                ) : null;
              })}
            </Box>
          ) : (
            <Carousel
              showIndicators={false}
              showStatus={false}
              infiniteLoop={true}
              autoPlay={true}
              showThumbs={false}
              width={345}
              interval={3000}
            >
              {cards.map((c, i) => {
                return (
                  <PromoCard
                    key={`card${i}`}
                    title={c.title}
                    description={c.description}
                    image={c.image}
                  />
                );
              })}
            </Carousel>
          )}
        </Grid>
        <Grid
          textAlign="center"
          item
          xs="auto"
          sm={shuffleStart && shuffleDone ? 0 : 6}
        >
          {shuffleStart ? (
            shuffleDone ? null : (
              <Box sx={{ width: 125, height: 65, margin: "auto" }}>
                <CircularProgress color="secondary" />
              </Box>
            )
          ) : (
            <Box sx={{ width: 125, height: 65, margin: "auto" }}>
              <Button
                sx={{ width: 125, height: 65 }}
                size="large"
                color="secondary"
                variant="contained"
                onClick={() => {
                  shuffle();
                }}
              >
                <CardGiftcardIcon />
              </Button>
            </Box>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}
