import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";
import image7 from "../images/image7.jpg";
import image8 from "../images/image8.jpg";
import image9 from "../images/image9.jpg";
import image10 from "../images/image10.jpg";

const imageArray = [
  image1,
  image2,
  image3,
  image4,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
];

const promos = [
  {
    title: "10 minutes",
    description: "10 minutes additionnelles à la séance actuelle.",
  },
  {
    title: "15 minutes",
    description: "15 minutes additionnelles à la séance actuelle.",
  },
  {
    title: "30 minutes",
    description:
      "30 minutes additionnelles pour un prochain massage d'une durée de 60 minutes.",
  },
  {
    title: "15$ de rabais",
    description: "15$ de rabais sur un prochain massage.",
  },
  {
    title: "20$ de rabais",
    description: "20$ de rabais sur un prochain massage.",
  },
  {
    title: "2 cartes cadeaux",
    description:
      "2 cartes cadeaux de 10$ applicables pour les massages suivants.",
  },
  {
    title: "5$ de rabais",
    description: "5$ de rabais sur la séance actuelle.",
  },
  {
    title: "10$ de rabais",
    description: "10$ de rabais sur la séance actuelle.",
  },
];

export const getCardProps = () => {
  const imageNumberArray = getImagePathNumber();

  promos.forEach((p, i) => (p.image = imageArray[imageNumberArray[i]]));

  return promos;
};

const imageAmmount = 10;

function getImagePathNumber() {
  const imageNumberArray = Array(imageAmmount)
    .fill()
    .map((_, index) => index + 1);
  return imageNumberArray.sort(() => Math.random() - 0.5);
}
