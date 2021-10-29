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
  { title: "Promo1", description: "This is a test that describes promo1." },
  { title: "Promo2", description: "This is a test that describes promo2." },
  { title: "Promo3", description: "This is a test that describes promo3." },
  { title: "Promo4", description: "This is a test that describes promo4." },
  { title: "Promo5", description: "This is a test that describes promo5." },
  { title: "Promo6", description: "This is a test that describes promo6." },
  { title: "Promo7", description: "This is a test that describes promo7." },
  { title: "Promo8", description: "This is a test that describes promo8." },
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
